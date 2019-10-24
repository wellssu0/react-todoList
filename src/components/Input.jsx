import React,{ memo,useEffect } from 'react'
import { connect } from 'react-redux'

import * as actionCreators from '../actionCreators'
import { Color ,Color2} from '../utils'
import { IoIosRadioButtonOn,IoIosAddCircleOutline} from 'react-icons/io';


const node = React.createRef()

const Input = (props) =>{

  const {handleClick, inputContent, modeColor,isShowDropDownMenu, handleChangeInputContent, handleAddItem,setModeColor,toggleShowDropDownMenu} = props

  const newItem = {
    id: '_' + Math.random().toString(36).substr(2, 9),
    content: inputContent,
    startTimestamp: new Date().getTime(),
    endTimestamp: new Date().getTime(),
    isCompleted: false,
    modeColor: modeColor
  }

  useEffect(()=>{
    if(isShowDropDownMenu){
      document.addEventListener("click",handleClick,false)
    }
    return ()=>{
      document.removeEventListener('click',handleClick,false)
    }
  })

  return (
      <div className="mx-3 my-3 border border-info rounded d-flex list-group-item justify-content-between align-content-center" >
        <div ref={node}>
          <div style={{width:"24px",height:"100%",cursor:'pointer'}}
            onClick={toggleShowDropDownMenu}
          >
            <IoIosRadioButtonOn style={{width:"24px",height:"24px",color:`${modeColor}`}}/>
          </div>
          {isShowDropDownMenu && 
            <div className="dropdown-menu text-capitalize " style={{display:"block",fontSize:"15px",cursor:'pointer'}} >
              {
                Color2.map(item=>(
                  <div className="dropdown-item" 
                    onClick={()=>setModeColor(Object.values(item)[0])}
                    key={Object.values(item)[0]}
                  >
                    <IoIosRadioButtonOn style={{color:`${Object.values(item)[0]}`}}/>
                    <span className='text-muted'>  {Object.keys(item)[0]} task</span>
                  </div>
                ))
              }

            </div>
          }
        </div>  
          <input 
            type="text" 
            className="text-center" 
            placeholder="点击输入待办事项"
            style={{width:"100%",border:"none"}}
            value={inputContent} 
            onChange={(event)=>handleChangeInputContent(event)} 
          />  
          
          <div style={{width:"24px",height:"24px",margin:"auto",cursor:'pointer'}}
            onClick = {()=>inputContent !== '' && handleAddItem(newItem)}
          >
            <IoIosAddCircleOutline style={{width:"24px",height:"24px",color:`${Color.green}`}}/>
          </div>  
              
      </div>   
  )
  
}

const mapState = state => ({
  inputContent:state.inputContent,
  modeColor:state.modeColor,
  isShowDropDownMenu:state.isShowDropDownMenu,
})

const mapDisptach = dispatch => ({
  handleChangeInputContent(event){
    dispatch(actionCreators.getChangeInputContentAction(event.target.value))
  },
  handleAddItem(item){
    dispatch(actionCreators.getAddItemAction(item))
  },
  toggleShowDropDownMenu(item){
    dispatch(actionCreators.toggleShowDropDownMenu())
  },
  handleClick(e){
    if(node.current.contains(e.target)){
      return
    }else{
      dispatch(actionCreators.handleClick())
    }
  },
  setModeColor(str){
    dispatch(actionCreators.setModeColor(str))
  },
 
})

export default memo(connect(mapState,mapDisptach)(Input))