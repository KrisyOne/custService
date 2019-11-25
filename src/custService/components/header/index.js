import React, {Component} from 'react';
import Select from '../select';

class Header extends Component{
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      orgId: ''
    }
  }
  
  getOrgId = (id) =>{
    this.setState({
      orgId: id
    })
  }
  render() {
    return (
      <div>
       <div>
        <div>嗨，请选择感兴趣机构</div>
        < Select getOrgId={this.getOrgId}/>
       </div>
       {this.props.children}
      </div>
    )
  }
}

export default Header