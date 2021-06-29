import React from 'react';
import Hornedbeast from './Hornedbeast';
import Horned from './Horned.json'


class Main extends React.Component{
    render(){
        return(
            <div>
               {
                   Horned.map((items,index)=>{
                       return(
                         <Hornedbeast title={items.props} pargraph={items.description} url={items.image_url} key={index} showdata={this.state.showdata} renderModal={this.renderModal} ></Hornedbeast>
                      
                      
               )})
                   }
               
            </div>
        )
    }
}


export default Main