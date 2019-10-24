import React,{memo} from 'react'
import { connect } from 'react-redux'

import { IoMdCheckmarkCircleOutline, IoIosClose } from 'react-icons/io';
import { Color } from '../utils'
import * as actionCreators from '../actionCreators'

const FinishedList = props =>{
    const { itemsCompleted, handleDeleteItem , handleCompletedItem} = props
    return (
      <React.Fragment>
      {itemsCompleted.length > 0 &&
        <p className="text-center text-capitalize text-muted">completed</p>
      }
      <ul className="list-group mx-3 my-3">
        {
          itemsCompleted.map(item=>(
            <li className="d-flex list-group-item justify-content-between align-content-center " key={item.id}>
              <div style={{width:"24px",height:"24px",margin:"auto 0"}}
                onClick={()=>handleCompletedItem(item)}
              >
               <IoMdCheckmarkCircleOutline style={{width:"24px",height:"24px",color:`${Color.green}`,cursor:'pointer'}}/>
              </div>  
              
              <del className="pl-3 pr-3 font-weight-light"
                style={{color:`${item.modeColor}`}}
              >{item.content}</del>
              
              <div style={{width:"24px",height:"24px",margin:"auto 0",cursor:'pointer'}}
                onClick={()=>handleDeleteItem(item)}
              >
               <IoIosClose style={{width:"24px",height:"24px",color:`${Color.info}`}}/>
              </div>  
            </li>
          ))
        }
      </ul>
      </React.Fragment>
    )
}

const mapState = state => ({
  itemsCompleted:state.itemsCompleted
})
const mapDispatch = dispatch => ({
  handleDeleteItem(item){
    dispatch(actionCreators.deleteItemAction(item))
  },
  handleCompletedItem(item){
    dispatch(actionCreators.switchCompletedItemAction(item))
  }
})
export default memo(connect(mapState,mapDispatch)(FinishedList))

