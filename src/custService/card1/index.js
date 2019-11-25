import React, {Component} from 'react';
import './index.css';
import FilterBox from '../../custService/components/MyFilterBox/index'

class card1 extends Component {
  constructor(props) {
     super(props)
     console.log(props)
  }
  render (){
    return (
      <FilterBox ></FilterBox>
    )
  }
}
export default card1