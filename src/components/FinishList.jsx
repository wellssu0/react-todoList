import React from 'react'
import PropTypes from "prop-types"


const FinishList = ({finishedItems,onEdDeleteItem}) => {
  return (
    <ul className="finished-list list-group mx-3 my-3">
      {
        finishedItems.map(item => (
          <li className="list-group-item justify-content-between align-content-center d-flex"
            key={item.id}
          >
            <span className="col-2">
              <ion-icon name="heart"></ion-icon>
            </span>
            <span className="col-8" >{item.content}</span>
            <a href="#" className="col-1"
              onClick={event => event.preventDefault()}
            >
              <ion-icon name="done-all"></ion-icon>
            </a>
            <a href="#" className="col-1"
              onClick={()=>{onEdDeleteItem(item)}}
            >
              <ion-icon name="close"></ion-icon>
            </a>
          </li>
        ))
      }
    </ul>
  )
}
FinishList.propTypes={
  finishedItems:PropTypes.array.isRequired,
  onEdDeleteItem:PropTypes.func.isRequired
}
export default FinishList