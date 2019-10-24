import * as actionTypes from "../actionTypes"
import { Color } from '../utils'

const defaultState = {
  inputContent:'',
  modeColor: Color.gray,
  isShowDropDownMenu:false,
  itemsUnCompleted: [],
  itemsCompleted: [],
}

export default (state = defaultState , action) => {
  switch(action.type){
    case actionTypes.SET_INITIAL_DATA:
      const state1 = JSON.parse(JSON.stringify(state))
      state1.itemsUnCompleted = action.itemsNo
      state1.itemsCompleted = action.itemsYes.reverse()
      return state1
    case actionTypes.SET_CHANGE_INPUT_CONTENT:
      const state2 = JSON.parse(JSON.stringify(state))
      state2.inputContent = action.content
      return state2
    case actionTypes.CLEAR_INPUT_CONTENT:
      const state3 = JSON.parse(JSON.stringify(state))
      state3.inputContent = ''
      state3.modeColor = Color.gray
      return state3
    case actionTypes.SET_MODECOLOR:
      const state4 = JSON.parse(JSON.stringify(state))
      state4.modeColor = action.str
      state4.isShowDropDownMenu = false
      return state4
    
    case actionTypes.TOGGLE_SHOW_DROP_DOWN_MENU:
      const state7 = JSON.parse(JSON.stringify(state))
      state7.isShowDropDownMenu = !state.isShowDropDownMenu
      return state7
    case actionTypes.UNFINISH_IS_COMPLETED:
      const state8 = JSON.parse(JSON.stringify(state))
      state8.itemsUnCompleted.forEach(item => {
        (item.id === action.item.id) && (item.isCompleted = true ) 
      })
      return state8
    case actionTypes.CLOSE_DRAP_DOWN_MENU:
      const state11 = JSON.parse(JSON.stringify(state))
      state11.isShowDropDownMenu = false
      return state11
    default:
      return state
  }

}