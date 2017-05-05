import React from 'react'
import BaseComponent from './BaseComponent'

import { Tabs, Code, Table, Button, xoSystem, Tag } from '../components'

export default class TagAPI extends BaseComponent {

  getLeftDOMList() {
    return (
      [
        {
          'name': 'Tag',
          list: [
            {
              'data-target': 'tag',
              'name': '标签'
            }
          ]
        }
      ]
    )
  }

  getRightDOMList() {
    return (
      [
        {
          'data-toggle': 'tag',
          render: () => {
            return (
              <div className='xo-padding-xs'>
                <h2>标签</h2>
                <Tabs>
                  <Tabs.TabPane text='效果'>
                    <div className='xo-padding-xs xo-layout'>
                      <TagTest/>
                    </div>
                  </Tabs.TabPane>
                  <Tabs.TabPane text='代码'>
                    <Code>
                      {
                        `<TagTest/>\n` +
                        `\n` +

                        `class TagTest extends React.Component \{\n` +

                          `\ttagKey = 0;\n` +

                          `\tconstructor(props) \{\n` +
                            `\t\tsuper(props);\n` +
                            `\t\tthis.state = \{\n` +
                              `\t\t\ttags: [<Tag key={this.tagKey} data-key={this.tagKey} title={this.tagKey} onClose={(tag) => this.remove(tag)}>{this.tagKey}</Tag>]\n` +
                            `\t\t\}\n` +
                          `\t\}\n` +

                          `\trender() \{\n` +
                            `\t\treturn (\n` +
                              `\t\t\t<div>\n` +
                                `\t\t\t\t<div>{this.state.tags}</div>\n` +
                                `\t\t\t\t<Button onClick={() => this.add()}>add tag</Button>\n` +
                              `\t\t\t</div>\n` +
                            `\t\t)\n` +
                          `\t\}\n` +

                          `\tadd() \{\n` +
                            `\t\tlet key = ++this.tagKey;\n` +
                            `\t\tlet tag = <Tag key={key} data-key={key} title={key} onClose={(_tag) => this.remove(_tag)}>{key}</Tag>;\n` +
                            `\t\tlet tags = this.state.tags;\n` +
                            `\t\tthis.setState({tags: tags.concat(tag)});\n` +
                          `\t\}\n` +

                          `\tremove(tag) \{\n` +
                            `\t\tthis.setState(function (previousState) {\n` +
                              `\t\t\treturn {\n` +
                                `\t\t\t\ttags: previousState.tags.filter(function (_tag) {\n` +
                                  `\t\t\t\t\treturn _tag.key != tag.props['data-key'];\n` +
                                `\t\t\t\t})\n` +
                              `\t\t\t};\n` +
                            `\t\t\});\n` +
                          `\t}\n` +

                        `}`
                      }
                    </Code>
                  </Tabs.TabPane>
                </Tabs>
                <h2>API</h2>
                <p>prop</p>
                <Table
                  columns={
                    [
                      {title: 'name', field: 'name', width: 200},
                      {title: 'type', field: 'type', width: 100},
                      {title: 'default', field: 'default', width: 200},
                      {title: 'desc', field: 'desc'}
                    ]
                  }
                  data={
                    [
                      {name: 'disabled', type: 'bool', default: 'false', desc: '禁用'},
                      {name: 'onClose', type: 'func', desc: '(tag, e) => { ... } 关闭，没赋予时不会出现右边的x'}
                    ]
                  }
                  config={
                    {onCellRender: cellRender}
                  }
                  />
              </div>
            )
          }
        }
      ]
    )
  }

}

const cellRender = (sender) => {
  if(sender.column.field == 'desc' && !xoSystem.isEmpty(sender.data.desc)) {
    let descList = sender.data.desc.split('\n');
    return(
      descList.map((desc, index) => {
        return <p key={index}>{desc}</p>
      })
    )
  }
}

class TagTest extends React.Component {

  tagKey = 0;

  constructor(props) {
    super(props);
    this.state = {
      tags: [<Tag key={this.tagKey} data-key={this.tagKey} title={this.tagKey} onClose={(tag) => this.remove(tag)}>{this.tagKey}</Tag>]
    }
  }

  render() {
    return (
      <div>
        <div>{this.state.tags}</div>
        <Button onClick={() => this.add()}>add tag</Button>
      </div>
    )
  }

  add() {
    let key = ++this.tagKey;
    let tag = <Tag key={key} data-key={key} title={key} onClose={(_tag) => this.remove(_tag)}>{key}</Tag>;
    let tags = this.state.tags;
    this.setState({tags: tags.concat(tag)});
  }

  remove(tag) {
    this.setState(function (previousState) {
      return {
        tags: previousState.tags.filter(function (_tag) {
          return _tag.key != tag.props['data-key'];
        })
      };
    });
  }

}
