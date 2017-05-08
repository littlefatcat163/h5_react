import React from 'react'
import ReactDOM from 'react-dom'
import BaseComponent from '../BaseComponent'

import './_loading.scss'

export default class Loading extends BaseComponent {

  ref_loading = null;

  render() {
    return (
      <div className={`xo-loading-container`}>
        <div className={`xo-loading-mask`}></div>
        <div className={`xo-loading`} ref={(ref_loading) => this.ref_loading = ref_loading}></div>
      </div>
    )
  }

  componentDidMount() {
    super.componentDidMount();

    let loading = <div className='xo-loading-type'>
                    <div className='xo-loading-t1' style={{size: this.props.size}}>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>;
    if(this.props.type == Loading.TYPE.ONE) loading = <div className={`xo-loading-type`} style={{fontSize: this.props.size}}>
                                                        <span className='fa fa-refresh fa-pulse'></span>
                                                      </div>;
    else if(this.props.type == Loading.TYPE.TWO) loading = <div className={`xo-loading-type`} style={{fontSize: this.props.size}}>
                                                              <span className='fa fa-spinner fa-pulse'></span>
                                                            </div>;

    ReactDOM.render(loading, this.ref_loading);
  }

}

Loading.TYPE = {
  ONE: '1',
  TWO: '2'
}

Loading.propTypes = {
  size: React.PropTypes.number
}

Loading.defaultProps = {
  size: 24
}
