import React, {Component} from 'react';
import './App.css';
import "antd/dist/antd.css";



const tabs = [
  {
    id: "1",
    name: "ETC客群",
    icon: 'jiangbei',
    color: '95,157,207',
    path: '/etc'
  },
  {
    id: "2",
    name: "代发客群",
    icon: 'box',
    color: '255,110,90',
    path: '/cust'
  },
  {
    id: "3",
    name: "其他",
    icon: 'fire',
    color: '255,196,61'
  }
]

class App extends Component {
  getStyle = (obj, num) => {
    let style = {
      color: 'rgb(' + obj.color + ')'
    }
    if (num) {
      style = {
        backgroundColor: 'rgba(' + obj.color + ',0.2)'
      }
    }
    return style
  }
  toPath(path){
    this.props.history.push(path)
  }
  render (){
    return (
    <div className="App">
      <div className="flex cust">
        {
          tabs.map((item, index) => {
            return <div key={index} onClick={() => {this.toPath(item.path)}}>
              < div className = "cust-item" style={this.getStyle(item, 'num')}>
                <i className={`iconfont icon-${item.icon}`} style={this.getStyle(item)}></i>
              </div>
              <div className="cust-item-label">{item.name}</div>
            </div>
        })}
      </div>
    </div>
    );
  }
}

export default App;
