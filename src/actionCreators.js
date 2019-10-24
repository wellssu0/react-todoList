import * as actionTypes from './actionTypes'

export const getInitialDataAction = () => ({
  type : actionTypes.GET_INITIAL_DATA,
})
export const setInitialData = (itemsNo,itemsYes) => ({
  type : actionTypes.SET_INITIAL_DATA,
  itemsNo,itemsYes
})
export const getChangeInputContentAction = (content) => ({
  type : actionTypes.SET_CHANGE_INPUT_CONTENT,
  content
})
export const getAddItemAction = (newItem) => ({
  type : actionTypes.ADD_ITEM,
  newItem
})
export const setClearInputAction = () => ({
  type : actionTypes.CLEAR_INPUT_CONTENT,
})
export const deleteItemAction = (item) => ({
  type : actionTypes.DELETE_ITEM,
  item
})
export const switchCompletedItemAction = (item) => ({
  type : actionTypes.SWITCH_COMPLETED_ITEM,
  item
})
export const setListIsCompletedAction = (item) => ({
  type : actionTypes.UNFINISH_IS_COMPLETED,
  item
})
export const toggleShowDropDownMenu = () => ({
  type : actionTypes.TOGGLE_SHOW_DROP_DOWN_MENU,
})
export const handleClick = () => ({
  type : actionTypes.CLOSE_DRAP_DOWN_MENU,
})
export const setModeColor = (str) => ({
  type : actionTypes.SET_MODECOLOR,
  str
})

