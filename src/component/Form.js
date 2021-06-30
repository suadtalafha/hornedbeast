import React, { Component } from 'react'
import { Form } from 'react-bootstrap'

export class Form extends Component {
    constructor(props){
        super(props)
        
    }
    render() {
        return (
            <>
            <Form>
       
              <Form.Label>Filter of hornes</Form.Label>
              <Form.Control as ="selsct" onChange={}> 
              <option value="0">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="4">Wow</option>
              
              
              
              </Form.Control>
         
          
           
          
          </Form>
          </>
        )
    }
}

export default Form
