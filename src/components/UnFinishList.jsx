import React, {memo} from 'react'
import { connect } from 'react-redux'

import { IoMdRadioButtonOff, IoIosClose, IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { Color } from '../utils'
import * as actionCreators from '../actionCreators'

const UnFinishList = props =>{
    const { itemsUnCompleted ,handleCompletedItem, handleDeleteItem } = props

    return (
      <React.Fragment>
      {itemsUnCompleted.length > 0 &&
        <p className="text-center text-capitalize text-muted">tasks</p>
      }
      <ul className='list-group mx-3 my-3'>
        {
          itemsUnCompleted.map(item=>(
            <li className="d-flex list-group-item justify-content-between align-content-center " key={item.id}
            >
              <div style={{width:"24px",height:"24px",margin:"auto 0"}}> 
                {!item.isCompleted &&
                  <IoMdRadioButtonOff 
                    style={{width:"24px",height:"24px",color:`${item.modeColor}`,cursor:'pointer'}}
                    onClick={()=>handleCompletedItem(item)}
                  />
                }
           

                <IoMdCheckmarkCircleOutline 
                className={item.isCompleted ? "iicon ishow" : "iicon"}
                style={{width:"24px",height:"24px",color:`${item.modeColor}`}}/>
            
              </div>

              <span className="pl-3 pr-3" style={{color:`${item.modeColor}`}}>{item.content}</span>
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
  itemsUnCompleted:state.itemsUnCompleted,
})
const mapDispatch = dispatch => ({
  handleDeleteItem(item){
    dispatch(actionCreators.deleteItemAction(item))
  },
  handleCompletedItem(item){
    console.log(item.isCompleted)
    dispatch(actionCreators.setListIsCompletedAction(item))
    item.endTimestamp = new Date().getTime()
    dispatch(actionCreators.switchCompletedItemAction(item))
  }
})
export default memo(connect(mapState,mapDispatch)(UnFinishList))