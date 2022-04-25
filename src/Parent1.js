import React from 'react'
import Child1 from './Child1'

class Parent1 extends React.Component{

  render(){
    return(
      <div>
        Hello from Parent1
        <Child1/>
      </div>
    )
  }
}
export default Parent1