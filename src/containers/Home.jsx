import React, { Component,Fragment } from 'react'

import './../bootstrap.min.css'
import AddItem from './../components/AddItem'
import UnFinishList from './../components/UnFinishList'
import FinishList from './../components/FinishList'

let index = 0 
export default class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      items: [],
      finishedItems:[]
    }
  }

  onAddItem = (inputContent) => {
    index++
    const { items } = this.state
    const newItem = {id:index,content:inputContent,status:false}
    this.setState({
      items:[newItem, ...items]
    })
  }
  onFinishItem = (item) => {
    //取出state的数据
    const { items,finishedItems } = this.state
    //删除item后的items
    const unItems = items.filter(i => i.id !== item.id && i.status === item.status )
    //做完的的item
    const edItem = {id:item.id,content:item.content,status:!item.status}
    //更新状态
    this.setState({
      items: unItems,
      finishedItems:[edItem, ...finishedItems]
    })
  }
  onDeleteItem = (item) => {
    const { items } = this.state
    //删除item后的items
    const deItems = items.filter(i => i.id !== item.id ) 
    this.setState({
      items: deItems,
    })
  }
  onEdDeleteItem = (item) => {
    const { finishedItems } = this.state
    //删除item后的items
    const deFinishedItems = finishedItems.filter(i => i.id !== item.id ) 
    this.setState({
      finishedItems:deFinishedItems
    })
  }
  render() {
    const { items,finishedItems } = this.state
    return (
      <Fragment>

        <AddItem onAddItem={this.onAddItem}/>
        <UnFinishList items={items} onFinishItem={this.onFinishItem} onDeleteItem={this.onDeleteItem}/>
        <FinishList finishedItems={finishedItems}
        onEdDeleteItem={this.onEdDeleteItem}/>
     
      </Fragment>
    )
  }
}