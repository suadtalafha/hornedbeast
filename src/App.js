import React from 'react'
import Header from './component/Header';
import Main from './component/Main';
import Footer from './component/Footer';
import SelectedBeast from './component/SelectedBeast';
import Horned from './component/Horned.json'

import './App.css';

 

class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
      showModal:false,
      showdata:{},
    }
  }
  renderModal =(data)=>{
    let element = Horned.find(value=>{
      if(value.title===data){
       return value 
      }
    })
  }
  handelModal =()=>{
    this.setState({
      showModal:true,
      showdata:element,
    })
  }
  handelClose =()=>{
    this.setState({
      showModal:false,
      showdata:{},
    })
  }
  render(){
    return(
      <div>
        <Header/>
        <Main showdata={this.state.showdata} renderModal={this.renderModal} />
        <SelectedBeast showModal={this.state.showModal} handelClose={this.handelClose} showdata={this.state.showdata} />
        <Footer/>
      </div>
    )
  }
}











export default App;
