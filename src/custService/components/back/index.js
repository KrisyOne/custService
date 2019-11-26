import React, {Component} from 'react';
import './back.scss';
import {createBrowserHistory} from 'history'
const history = createBrowserHistory()

class Back extends Component{
  constructor(props){
    super(props)
    this.state ={
      btnStyle: props.btnStyle
    }
  }
  render() {
    return (
      <div className="btn-back absolute" style={this.state.btnStyle} onClick={() => {history.goBack()}}>
          <i className="iconfont icon-arrow-left-b"></i>
          <span>返回</span>
      </div>
    )
  }
}

export default Back