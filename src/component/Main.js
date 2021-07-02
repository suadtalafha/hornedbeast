import React from 'react';
import Hornedbeast from './Hornedbeast';
import Horned from './Horned.json'
import  Form  from 'react-bootstrap/Form'
import FormInfo from './FormInfo'

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            displayhorned: Horned
        }
    }
    filter = (event) => {
       event.preventDefault()
        let arrayFilter = [];
        let selectValue = Number(event.target.value);
        arrayFilter= Horned.filter(value => {
            if (value.horns == selectValue) {
                return true
            }
        })
        this.setState({
            displayhorned: arrayFilter
        })

        if (arrayFilter.length === 0) {
            this.setState({
                displayhorned: Horned
            })
        }
    }


    render() {
        return (
            <div>
                <FormInfo filter={this.filter}    />
                {
                  
                  this.state.displayhorned.map((items, index) => {
                        return (
                            <Hornedbeast title={items.title} pargraph={items.description} url={items.image_url} key={index} showdata={items.title} renderModal={this.props.renderModal} ></Hornedbeast>


                        )
                    })
                }

            </div>
        )
    }
}


export default Main