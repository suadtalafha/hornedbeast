import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {
  
    render() {
        return (
            <Modal show={this.props.showModal} onHide={this.props.handelClose}>
                <Modal.Header closeButton >
                    <Modal.Title>{this.props.showdata.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Card.Img  variant="top"  src={this.props.showdata.image_url} alt={this.props.title} onClick={this.renderModal}           />                          
                    {this.props.showdata.description} {this.props.showdata.title}
                </Modal.Body> 
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handelClose}>
                        Close
                    </Button>
                
                </Modal.Footer>
            </Modal>
        )
    }
}






export default SelectedBeast