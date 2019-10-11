import React,{ Component } from 'react'
import PropTypes from 'prop-types'

export default class AddItem extends Component{
  constructor(props){
    super(props)
    this.state = {
      inputContent:''
    }
  }
  static propTypes = {
    onAddItem:PropTypes.func.isRequired
  }
  handleAdd = () => {
    const { inputContent } = this.state
    this.props.onAddItem(inputContent)
    this.setState({
      inputContent:""
    })
  }
  handleChange = (event) => {
    const content = event.target.value.trim()
    this.setState({
      inputContent:content
    })

  }
  render() {
    return (
      <div className="mx-3 my-3">
          <h2 className="row justify-content-center ">ToDoList</h2>
          <div className="input-group mb-3 ">
            <input type="text" className="form-control" placeholder="输入待办事项：" aria-label="Recipient's username" aria-describedby="button-addon2"
            value={this.state.inputContent}
              onChange={(event)=>this.handleChange(event)}
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button" id="button-addon2"
              onClick={this.handleAdd}
              >
                <ion-icon name="add"></ion-icon>
              </button>
            </div>
          </div>
            
      </div>
      
    )
  }
}