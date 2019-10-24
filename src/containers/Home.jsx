import React, { memo , useEffect} from 'react'
import { connect } from 'react-redux'
import './home.css'

import * as actionCreators from '../actionCreators'
import Input from '../components/Input'
import UnFinishList from '../components/UnFinishList'
import FinishedList from '../components/FinishedList'

const Home = props => {
  const { getInitialData } = props
  useEffect(()=>{
    getInitialData()
  })
  return (
    <div className="container">
      <div className="jumbotron shadow-lg p-3 bg-white rounded">
        <h2 className="text-center text-muted">ToDoList</h2>
        <Input />
        <UnFinishList />
        <FinishedList />
      </div>
    </div>
  )
}

const mapDispatch = dispatch =>({
  getInitialData(){
    dispatch(actionCreators.getInitialDataAction())
  }
})
export default memo(connect(null,mapDispatch)(Home))