import React from 'react';
import { StartTickTack } from './buttons';
import { StopTickTack } from './buttons';


export default class Clock extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        date: new Date().toLocaleTimeString(),
        intervalControl: true
      }
  }

  tick(){
    this.tickTack = setInterval(()=>{
      this.setState({
        date: new Date().toLocaleTimeString()
      })
    })  
  }

  start = ()=>{
    if(this.state.intervalControl) alert("El reloj ya esta en marcha");
    else{
      this.tick()
      this.setState({
        intervalControl: true
      })
    }
  }

  stop = ()=>{
    clearInterval(this.tickTack)
    this.setState({
      intervalControl: false
    })
  }

  componentDidMount(){
    this.tick()
    console.log("The component was mounted")
  }
  componentWillUnmount(){
    console.log("Component was unmount")
  }
  render() {
    return (
      <>
        <h3>{this.state.date}</h3>
        <StartTickTack start={this.start} />
        <StopTickTack stop={this.stop} />
      </>
    )
  }
}