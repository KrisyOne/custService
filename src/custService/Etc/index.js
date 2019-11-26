import React, { Component } from "react";
import Header from '../components/header';
import './index.scss'
class ETC extends Component{
  state = {
    cust: {
      cust_num: 1233,
      actived_num: '3443'
    }
  }
  render(){
    return (
      <div>
        < Header  >
        <div className="etc text-center">
          <h2 className="etc-title">ETC存量客户数（人）</h2>
          <p className="etc-subtitle">截至至上月的存量ETC激活客户数</p>
          <h2 className="etc-cust-num">{this.state.cust.cust_num}</h2>
          <div className="etc-detail flex">
            <div className="relative">
              <p className="etc-detail-title">ETC激活客户数</p>
              <p className="etc-detail-subtitle">（上月新增）</p>
              <p className="etc-detail-num">{this.state.cust.actived_num}</p>
            </div>
            <div>
              <p className="etc-detail-title">ETC申请客户数</p>
              <p className="etc-detail-subtitle">（上月新增）</p>
              <p className="etc-detail-num">{this.state.cust.actived_num}</p>
            </div>
          </div>
          </div>
        </Header>
      </div>
    )
  }
}
export default ETC