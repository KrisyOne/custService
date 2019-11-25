import React, {Component} from 'react';
import { Select } from 'antd';
const { Option } = Select;

const options = [
  {
    "DIC_NAME": "全行",
    "DIC_ID": "9900"
  },
  {
    "DIC_NAME": "上海分行",
    "DIC_ID": "9800"
  }
]

class Slect extends Component{
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  
  handleChange(value) {
    const {getOrgId} = this.props
    getOrgId(value)
  }
  render(h) {
    return (
      <Select style={{ width: 120 }} onSelect={this.handleChange}>
        {options.map(m => {
          return <Option value={m.DIC_ID} key={m.DIC_ID}>{m.DIC_NAME}</Option>
        })}
      </Select>
    )
  }
}

export default Slect