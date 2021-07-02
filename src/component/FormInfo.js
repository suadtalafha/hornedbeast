import React from 'react'
import Horned from './Horned.json'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'


class FormInfo extends React.Component {
  
    render() {
        return (
            <>
            <Form>
       
              <Form.Label>Filter of hornes</Form.Label>
              <Form.Control as ="select" onChange={this.props.filter}> 
              <option value="0">All</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
              <option value="100">Wow</option>
              
              
              
              </Form.Control>
         
          
           
          
          </Form>
          </>
        )
    }
}

export default FormInfo
