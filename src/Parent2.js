import React from 'react'
import Child2 from './Child2'

class Parent2 extends React.Component{

  render(){
    return(
      <div>
        Hello from Parent2
        <Child2/>
      </div>
    )
  }
}
export default Parent2