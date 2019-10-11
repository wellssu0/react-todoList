import React,{ Component } from 'react'
import PropTypes from 'prop-types'


export default class UnFinishList extends Component{
  
  static propTypes = {
    items:PropTypes.array.isRequired,
    onFinishItem:PropTypes.func.isRequired,
    onDeleteItem:PropTypes.func.isRequired
  }
  // componentWillReceiveProps(nextProps) { // 父组件重传props时就会调用这个方法
  //   this.setState({
  //     items: nextProps.items
  //   });
  // }
 
  handleFinish = (event,item) =>{
    event.preventDefault()
    this.props.onFinishItem(item)
  }
  render() {
    const { items ,onDeleteItem } = this.props 
    return (
      <ul className='list-group mx-3 my-3'>
        {
          items.map(item =>(
            <li className="list-group-item justify-content-between align-content-center d-flex"
              key={item.id}
            >
              <span className="col-2">
                <ion-icon name="heart-empty"></ion-icon>
              </span>
              <span className="col-8" >{item.content}</span>
              <a href="#" className="col-1"
                onClick={event => this.handleFinish(event,item)}
              >
                <ion-icon name="checkmark"></ion-icon>
              </a>
              <a href="#" className="col-1"
                onClick={()=>{onDeleteItem(item)}}
              >
                <ion-icon name="close"></ion-icon>
              </a>
            </li>
          ))
        }
      </ul>
    )
  }
}