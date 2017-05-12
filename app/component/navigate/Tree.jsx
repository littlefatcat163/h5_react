import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'
import BaseComponent from '../BaseComponent'
import xoSystem from '../../tool/_xoSystem'
import './_tree.scss'

const _nodeDragEnd = Symbol(`_nodeDragEnd`) //拖拽结束
const _nodeDragLeave = Symbol(`_nodeDragLeave`) //拖拽离开某个元素
const _parentNode = Symbol(`_parentNode`) //拖拽离开对应的元素为响应的被拖拽的父元素
const _onCheck = Symbol(`_onCheck`) //勾选处理数据与回调
const _onExpand = Symbol(`_onExpand`) //展开处理数据与回调
const _map = Symbol(`_map`) //数据父子键

export default class Tree extends BaseComponent {

  [_parentNode] = null;
  [_map] = new Map();

  render() {
    return (
      <div className='xo-tree-container' style={this.props.style}>

      </div>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    this.data = [];
    this[_map].clear();
    ReactDOM.render(<ul className='xo-tree'>{this.childToData(null, this.props.children)}</ul>, this.$dom[0]);
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    ReactDOM.unmountComponentAtNode(this.$dom[0]);
  }

  childToData(parentKey, children) {
    if(children) {
      if(children.length > 0) {
        let newChildren = null;
        for(let i in children) {
          let child = children[i];
          if(xoSystem.isObject(child) && child.type.displayName == Tree.TreeNode.displayName) {
            let _data = this[_map].get(parentKey);
            if(!_data) _data = [];
            let index = _data.length;
            _data.push({key: child.key, title: child.props.title, parentKey: parentKey, disabled: child.props.disabled, defaultExtend: child.props.defaultExtend, defaultChecked: child.props.defaultChecked});
            this[_map].set(parentKey, _data);
            if(!newChildren) newChildren = [];
            newChildren.push(
              React.cloneElement(child,
                                {...child.props,
                                   onDragEnd: (node) => this[_nodeDragEnd](node),
                                   onDragLeave: (node) => this[_nodeDragLeave](node),
                                   'data-key': child.key,
                                   index: index,
                                   children: this.childToData(child.key, child.props.children),
                                   disabledCheckbox: this.props.disabledCheckbox,
                                   disabledDrag: this.props.disabledDrag,
                                   addon: this.props.addon,
                                   addonOpen: this.props.addonOpen,
                                   addonClose: this.props.addonClose,
                                   onExpand: (node) => this[_onExpand](node),
                                   onSelect: this.props.onSelect,
                                   onCheck: (node) => this[_onCheck](node)
                               })
                             );
          }
        }
        return newChildren;
      }
      if(xoSystem.isObject(children) && children.type.displayName == Tree.TreeNode.displayName) {
        let _data = this[_map].get(parentKey);
        if(!_data) _data = [];
        let index = _data.length;
        _data.push({key: children.key, title: children.props.title, parentKey: parentKey, disabled: children.props.disabled, defaultExtend: children.props.defaultExtend, defaultChecked: children.props.defaultChecked});
        this[_map].set(parentKey, _data);
        return React.cloneElement(children,
                                 {...children.props,
                                   onDragEnd: (node) => this[_nodeDragEnd](node),
                                   onDragLeave: (node) => this[_nodeDragLeave](node),
                                   'data-key': children.key,
                                   index: index,
                                   children: this.childToData(children.key, children.props.children),
                                   disabledCheckbox: this.props.disabledCheckbox,
                                   disabledDrag: this.props.disabledDrag,
                                   addon: this.props.addon,
                                   addonOpen: this.props.addonOpen,
                                   addonClose: this.props.addonClose,
                                   onExpand: (node) => this[_onExpand](node),
                                   onSelect: this.props.onSelect,
                                   onCheck: (node) => this[_onCheck](node)
                                 });
      }
    } else {
      let _data = this[_map].get(parentKey);
      if(!_data) _data = [];
      this[_map].set(parentKey, _data);
    }
  }

  refesh() {
    ReactDOM.unmountComponentAtNode(this.$dom[0]);
    ReactDOM.render(<ul className='xo-tree'>{this.dataToChild()}</ul>, this.$dom[0]);
  }

  dataToChild(parentKey = null) {
    let children = null;
    let data = this[_map].get(parentKey);
    if(data && data.length > 0) {
      children = [];
      for(let i in data) {
        let _data = data[i];
        children.push(<Tree.TreeNode
                       title={_data.title}
                       key={_data.key}
                       onDragEnd={(node) => this[_nodeDragEnd](node)}
                       onDragLeave={(node) => this[_nodeDragLeave](node)}
                       data-key={_data.key}
                       index={i}
                       disabled={_data.disabled}
                       disabledCheckbox={this.props.disabledCheckbox}
                       disabledDrag={this.props.disabledDrag}
                       defaultExtend={_data.defaultExtend}
                       defaultChecked={_data.defaultChecked}
                       addon={this.props.addon}
                       addonOpen={this.props.addonOpen}
                       addonClose={this.props.addonClose}
                       onExpand={(node) => this[_onExpand](node)}
                       onSelect={this.props.onSelect}
                       onCheck={(node) => this[_onCheck](node)}
                       >
                         {this.dataToChild(_data.key)}
                       </Tree.TreeNode>
                     );
      }
    }
    return children;
  }

  [_nodeDragEnd](node) {

    if(!this[_parentNode]) return;

    let key = node['data-key'];
    let oldParentKey = node.getConfig().parentNode;
    if(oldParentKey) oldParentKey = oldParentKey.props['data-key'];
    const { dragPos, parentNode } = this[_parentNode].getConfig();

    if(dragPos == 0) {
      let parentKey = this[_parentNode]['data-key'];
      if(parentKey == oldParentKey) return;
      let nodeData = this[_map].get(oldParentKey).splice(node.props.index, 1);
      nodeData = nodeData[0];
      nodeData.parentKey = parentKey;
      this[_map].get(parentKey).push(nodeData);
    } else if(dragPos == -1) {
      let parentKey = null;
      if(parentNode) parentKey = parentNode['data-key'];
      let index = node.props.index;
      if(parentKey == oldParentKey) {
        let sIndex = this[_parentNode].props.index;
        if(index + 1 == sIndex) return;
        let data = this[_map].get(parentKey);
        let newData = [];
        if(index > sIndex) {
          let nodeData = data.splice(index, 1);
          let forData = data.splice(0, sIndex);
          data = forData.concat(nodeData, data);
        } else {
          let nodeData = data.splice(index, 1);
          let forData = data.splice(0, sIndex - 2);
          data = forData.concat(nodeData, data);
        }
        this[_map].set(parentKey, data);
      } else {
        let nodeData = this[_map].get(oldParentKey).splice(index, 1);
        let pIndex = this[_parentNode].props.index;
        let data = this[_map].get(parentKey);
        let forData = data.splice(0, pIndex);
        data = forData.concat(nodeData, data);
        this[_map].set(parentKey, data);
      }
    } else {
      let parentKey = null;
      if(parentNode) parentKey = parentNode.props['data-key'];
      let index = node.props.index;
      if(parentKey == oldParentKey) {
        let sIndex = this[_parentNode].props.index;
        if(index - 1 == sIndex) return;
        let data = this[_map].get(parentKey);
        if(index < sIndex) {
          let nodeData = data.splice(index, 1);
          let forData = data.splice(0, sIndex);
          data = forData.concat(nodeData, data);
        } else {
          let nodeData = data.splice(index, 1);
          let forData = data.splice(0, sIndex + 1);
          data = forData.concat(nodeData, data);
        }
        this[_map].set(parentKey, data);
      } else {
        let nodeData = this[_map].get(oldParentKey).splice(index, 1);
        let pIndex = this[_parentNode].props.index;
        let data = this[_map].get(parentKey);
        let forData = data.splice(0, pIndex + 1);
        data = forData.concat(nodeData, data);
        this[_map].set(parentKey, data);
      }
    }

    this.refesh();

    this[_parentNode] = null;
  }

  [_nodeDragLeave](node) {
    this[_parentNode] = node;
  }

  [_onCheck](node) {
    let parentKey = null;
    if(node.getConfig().parentNode) parentKey = node.getConfig().parentNode.props['data-key'];
    this[_map].get(parentKey)[node.props.index].defaultChecked = node.getConfig().defaultChecked;
    if(xoSystem.isFunc(this.props.onCheck)) this.props.onCheck(node.getConfig().defaultChecked, node);
  }

  [_onExpand](node, drag) {
    let parentKey = null;
    if(node.getConfig().parentNode) parentKey = node.getConfig().parentNode.props['data-key'];
    this[_map].get(parentKey)[node.props.index].defaultExtend = node.getConfig().defaultExtend;
    if(!drag && xoSystem.isFunc(this.props.onExpand)) this.props.onExpand(node.getConfig().defaultExtend, node);
  }

}

Tree.displayName = 'Tree'
Tree.propTypes = {
  disabledCheckbox: React.PropTypes.bool, //禁止勾选
  disabledDrag: React.PropTypes.bool, //禁止拖拽
  onExpand: React.PropTypes.func, //展开回调
  onCheck: React.PropTypes.func, //勾选回调
  onSelect: React.PropTypes.func //选中回调
}

Tree.defaultProps = {
  disabledCheckbox: true,
  disabledDrag: true
}

const _config = Symbol(`_config`)
const _extendClick = Symbol(`_extendClick`)
const _nodeClick = Symbol(`_nodeClick`)
const _checkClick = Symbol(`_checkClick`)
const _childNodeDidMount = Symbol(`_childNodeDidMount`)
const _onDragEnter = Symbol(`_onDragEnter`)
const _onDragOver = Symbol(`_onDragOver`)
const _onDragLeave = Symbol(`_onDragLeave`)
const _onDragStart = Symbol(`_onDragStart`)
const _onDragEnd = Symbol(`_onDragEnd`)
const _dragClientY = Symbol(`_dragClientY`)
const _dragStart = Symbol(`_dragStart`)

Tree.TreeNode = class TreeNode extends BaseComponent {

  [_config] = {
    addonOpen: <span className='fa fa-plus-square-o'></span>,
    addonClose: <span className='fa fa-minus-square-o'></span>,
    addon: <span className='fa fa-file-o'></span>,
    addonNotChecked: <span className='fa fa-square-o'></span>,
    addonChecked: <span className='fa fa-check-square-o'></span>,
    allowExtend: true,
    disabled: false,
    defaultExtend: false,
    currentAddon: null,
    parentNode: null,
    childNodes: null,
    defaultChecked: false,
    disabledCheckbox: true,
    dragPos: 0
  };

  refSwitcher = null;
  refCheckbox = null;

  [_dragClientY] = 0;
  [_dragStart] = false;

  constructor(props) {
    super(props);
    const { defaultExtend, addonOpen, addonClose, addon, addonNotChecked, addonChecked, parentNode, nodeDidMout, defaultChecked, disabledCheckbox, disabled, disabledDrag } = this.props;
    this[_config].defaultExtend = defaultExtend;
    this[_config].disabled = disabled;
    this[_config].disabledDrag = disabledDrag;
    if(!xoSystem.isEmpty(addonOpen)) this[_config].addonOpen = addonOpen;
    if(!xoSystem.isEmpty(addonClose)) this[_config].addonClose = addonClose;
    if(!xoSystem.isEmpty(addon)) this[_config].addon = addon;
    if(!xoSystem.isEmpty(addonNotChecked)) this[_config].addonNotChecked = addonNotChecked;
    if(!xoSystem.isEmpty(addonChecked)) this[_config].addonChecked = addonChecked;
    this[_config].parentNode = parentNode;
    this[_config].nodeDidMout = nodeDidMout;
    this[_config].defaultChecked = defaultChecked;
    this[_config].disabledCheckbox = disabledCheckbox;
  }

  render() {
    let { addon , defaultExtend, addonOpen, addonClose, defaultChecked, disabledCheckbox } = this[_config];
    let ul = React.Children.map(this.props.children, (child, index) => {
              if(xoSystem.isObject(child) && child.type.displayName == Tree.TreeNode.displayName) {
                let style = null;
                if(!defaultExtend) style = { display: 'none' };
                let childChecked = child.props.defaultChecked;
                if(defaultChecked) childChecked = true;
                let _child = React.cloneElement(child, {...child.props, defaultChecked: childChecked, disabledCheckbox: disabledCheckbox, parentNode: this, nodeDidMout: (node) => this[_childNodeDidMount](node), onExpand: this.props.onExpand, onSelect: this.props.onSelect, onCheck: this.props.onCheck});
                return <ul className='xo-tree-child' style={style}>{_child}</ul>
              }
            });
    if(!ul || ul.length == 0) {
      this[_config].allowExtend = false;
    } else {
      if(defaultExtend) addon = addonClose;
      else addon = addonOpen;
    }
    this[_config].currentAddon = addon;
    let disabledClass = '';
    if(this[_config].disabled) disabledClass = 'xo-disabled';
    return (
      <li className={disabledClass}>
        <span className='xo-tree-switcher' onClick={(e) => this[_extendClick](e)} ref={(refSwitcher) => this.refSwitcher = refSwitcher}></span>
        <span className='xo-tree-checked' ref={(refCheckbox) => this.refCheckbox = refCheckbox} onClick={(e) => this[_checkClick](e)}></span>
        <span
          className='xo-tree-node-content'
          draggable='true'
          onDragStart={(e) => this[_onDragStart](e)}
          onDragEnter={(e) => this[_onDragEnter](e)}
          onDragOver={(e) => this[_onDragOver](e)}
          onDragLeave={(e) => this[_onDragLeave](e)}
          onDragEnd={(e) => this[_onDragEnd](e)}
          onClick={(e) => this[_nodeClick](e)}
          title={this.props.title}>
          {this.props.title}
        </span>
        {ul}
      </li>
    )
  }

  componentDidMount() {
    super.componentDidMount();
    ReactDOM.render(this[_config].currentAddon, this.refSwitcher);
    if(xoSystem.isFunc(this[_config].nodeDidMout)) this[_config].nodeDidMout(this);
    if(!this[_config].disabledCheckbox) {
      if(this[_config].defaultChecked) {
        $(this.refCheckbox).addClass('xo-active');
        ReactDOM.render(this[_config].addonChecked, this.refCheckbox);
        if(xoSystem.isFunc(this.props.onCheck)) this.props.onCheck(this);
      } else {
        ReactDOM.render(this[_config].addonNotChecked, this.refCheckbox);
      }
    }
  }

  componentWillUnmount() {
    super.componentWillUnmount();
    ReactDOM.unmountComponentAtNode(this.refSwitcher);
    ReactDOM.unmountComponentAtNode( this.refCheckbox);
  }

  [_extendClick](e) {
    if(this[_config].disabled || !this[_config].allowExtend) return;
    if(!this[_config].defaultExtend) {
      this.$dom.children('ul').slideDown(150);
      ReactDOM.render(this[_config].addonClose, this.refSwitcher);
    } else {
      this.$dom.children('ul').slideUp(150);
      ReactDOM.render(this[_config].addonOpen, this.refSwitcher);
    }
    this[_config].defaultExtend = !this[_config].defaultExtend;
    if(xoSystem.isFunc(this.props.onExpand)) this.props.onExpand(this);
  }

  [_nodeClick](e) {
    if(this[_config].disabled) return;
    $(e.currentTarget).closest('.xo-tree').find('.xo-tree-node-content').removeClass('xo-active');
    $(e.currentTarget).addClass('xo-active');
    if(xoSystem.isFunc(this.props.onSelect)) this.props.onSelect(this);
  }

  [_checkClick](e) {
    if(this[_config].disabled || this[_config].disabledCheckbox) return;
    if(this[_config].defaultChecked) {
      $(this.refCheckbox).removeClass('xo-active');
      ReactDOM.render(this[_config].addonNotChecked, this.refCheckbox);
    } else {
      $(this.refCheckbox).addClass('xo-active');
      ReactDOM.render(this[_config].addonChecked, this.refCheckbox);
    }
    this[_config].defaultChecked = !this[_config].defaultChecked;
    if(xoSystem.isFunc(this.props.onCheck)) this.props.onCheck(this);
    if(this[_config].childNodes) {
      for(let node of this[_config].childNodes) node.setChecked(this[_config].defaultChecked);
    }
    if(this[_config].parentNode) this[_config].parentNode.setChecked(this[_config].defaultChecked, -1);
  }

  [_childNodeDidMount](childNode) {
    if(!this[_config].childNodes) this[_config].childNodes = [childNode];
    else this[_config].childNodes.push(childNode);
  }

  setChecked(checked, lev) {
    let change = true;
    if(lev == -1) {
      if(checked != this[_config].defaultChecked) {
        if(checked) {
          if(this[_config].childNodes) {
            for(let node of this[_config].childNodes) {
              if(!node.getChecked()) change = false;
            }
          }
        }
      } else change = false;
      if(change && this[_config].parentNode) this[_config].parentNode.setChecked(checked, -1);
    } else {
      if(this[_config].defaultChecked != checked) {
        if(this[_config].childNodes) {
          for(let node of this[_config].childNodes) node.setChecked(checked);
        }
      } else change = false;
    }
    if(change) {
      if(this[_config].defaultChecked) {
        $(this.refCheckbox).removeClass('xo-active');
        ReactDOM.render(this[_config].addonNotChecked, this.refCheckbox);
      } else {
        $(this.refCheckbox).addClass('xo-active');
        ReactDOM.render(this[_config].addonChecked, this.refCheckbox);
      }
      this[_config].defaultChecked = checked;
      if(xoSystem.isFunc(this.props.onCheck)) this.props.onCheck(this);
    }
  }

  getChecked() {
    return this[_config].defaultChecked;
  }

  getConfig() {
    return this[_config];
  }

  [_onDragStart](e) {
    if(this[_config].disabled || this[_config].disabledDrag) {
      e.stopPropagation();
      e.preventDefault();
      return false;
    }
    $(e.currentTarget).css({opacity: .3});
    this[_dragStart] = true;
    if(this[_config].defaultExtend) {
      if(this[_config].childNodes && this[_config].childNodes.length > 0) {
        this.$dom.children('ul').slideUp(150);
        ReactDOM.render(this[_config].addonOpen, this.refSwitcher);
      }
      this[_config].defaultExtend = !this[_config].defaultExtend;
    }
  }

  [_onDragEnter](e) {
    e.preventDefault();
    this[_dragClientY] = e.pageY;
  }

  [_onDragOver](e) {
    if(this[_dragStart]) return;
    if(!this[_config].disabled && this[_config].allowExtend && !this[_config].defaultExtend) {
      this.$dom.children('ul').slideDown(150);
      ReactDOM.render(this[_config].addonClose, this.refSwitcher);
      this[_config].defaultExtend = !this[_config].defaultExtend;
    }
    let dif = e.pageY - this[_dragClientY];
    let off = 6;
    if(!dif) return ;
    if(dif > 0) {
      if(dif < off) {
        $(e.currentTarget).removeClass('xo-tree-node-drag-bottom').removeClass('xo-tree-node-drag').addClass('xo-tree-node-drag-top');
        this[_config].dragPos = -1;
      } else if(dif < e.currentTarget.offsetHeight - off) {
        $(e.currentTarget).removeClass('xo-tree-node-drag-bottom').removeClass('xo-tree-node-drag-top').addClass('xo-tree-node-drag');
        this[_config].dragPos = 0;
      } else {
        $(e.currentTarget).removeClass('xo-tree-node-drag-top').removeClass('xo-tree-node-drag').addClass('xo-tree-node-drag-bottom');
        this[_config].dragPos = 1;
      }
    } else {
      if(dif > -off) {
        $(e.currentTarget).removeClass('xo-tree-node-drag-top').removeClass('xo-tree-node-drag').addClass('xo-tree-node-drag-bottom');
        this[_config].dragPos = 1;
      } else if(dif > - e.currentTarget.offsetHeight + off) {
        $(e.currentTarget).removeClass('xo-tree-node-drag-bottom').removeClass('xo-tree-node-drag-top').addClass('xo-tree-node-drag');
        this[_config].dragPos = 0;
      } else {
        $(e.currentTarget).removeClass('xo-tree-node-drag-bottom').removeClass('xo-tree-node-drag').addClass('xo-tree-node-drag-top');
        this[_config].dragPos = -1;
      }
    }
  }

  [_onDragLeave](e) {
    $(e.currentTarget).removeClass('xo-tree-node-drag-bottom').removeClass('xo-tree-node-drag').removeClass('xo-tree-node-drag-top');
    let node = this;
    if(this[_dragStart]) node = null;
    if(xoSystem.isFunc(this.props.onDragLeave)) this.props.onDragLeave(node);
  }

  [_onDragEnd](e) {
    $(e.currentTarget).css({opacity: 1});
    this[_dragStart] = false;
    if(xoSystem.isFunc(this.props.onDragEnd)) this.props.onDragEnd(this);
  }

}

Tree.TreeNode.displayName = 'Tree.TreeNode'

Tree.TreeNode.propTypes = {
  defaultExtend: React.PropTypes.bool,
  defaultChecked: React.PropTypes.bool,
  disabled: React.PropTypes.bool,
  disabledCheckbox: React.PropTypes.bool,
  disabledDrag: React.PropTypes.bool,
  onExpand: React.PropTypes.func,
  onCheck: React.PropTypes.func,
  onSelect: React.PropTypes.func,
  onDragEnd: React.PropTypes.func,
  onDragLeave: React.PropTypes.func
}

Tree.TreeNode.defaultProps = {
  defaultExtend: false,
  defaultChecked: false,
  disabled: false,
  disabledCheckbox: true,
  disabledDrag: true,
  parentNode: null
}
