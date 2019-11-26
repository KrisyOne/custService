import React, {Component} from 'react';
import Select from '../select';
import Back from '../back';
import './header.scss';

class Header extends Component{
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      orgId: '',
      btnStyle: {
        top: '30%'
      }
    }
  }
  
  getOrgId = (id) =>{
    this.setState({
      orgId: id
    })
  }
  render() {
    return (
      <div className="myBg relative">
       <div className="flex content-top">
        <div className="label">嗨，请选择感兴趣机构</div>
        < Select getOrgId={this.getOrgId}/>
       </div>
      < Back btnStyle={this.state.btnStyle}/>
       {this.props.children}
      </div>
    )
  }
}

export default Header