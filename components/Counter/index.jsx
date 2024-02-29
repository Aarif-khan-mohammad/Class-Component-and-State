import {Component} from 'react'
import './index.css'

class Counter extends Component{
  state= {count : 0}

  onIncrement = () =>{
    this.setState((prevState)=>({count: prevState.count + 1}))
  }

  onDecrement = ()=>{
    this.setState((prevState)=>({count: prevState.count-1}))
  }

  render(){
    const {count} = this.state
    return(
      <div className="counter">
        <h1>Counter Application</h1>
        <p>{count}</p>
        <div className='buttons'> 
          <button className='btn1' onClick={this.onIncrement}>Increment</button>
          <button className='btn2' onClick={this.onDecrement}>Decrement</button>
        </div>
      </div>
    )
  }
}

export default Counter