import React from 'react';
import { Button, Modal } from 'bootstrap';
import Card from 'react-bootstrap/Card';


class SelectedBeast extends React.Component {
  
    render() {
        return (
            <Modal show={this.props.showdata} onHide={this.props.handleClose}>
                <Modal.Header closeButton >
                    <Modal.Title>{this.props.showdata.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Modal.Image src={this.props.showdata.url} alt={this.props.title}                              />
                    {this.props.showdata.paragraph}
                </Modal.Body> 
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.showdata.handelClose}>
                        Close
                    </Button>
                
                </Modal.Footer>
            </Modal>
        )
    }
}






export default SelectedBeast