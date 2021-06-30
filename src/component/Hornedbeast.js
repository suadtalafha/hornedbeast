import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/';



class Hornedbeast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            numberOflikes: 0,
            show: false,
        }
    }
    increseNoflikes = () => {
        this.setState({
            numberOflikes: this.state.numberOflikes + 1
        })
    }

    renderModal = () => {
        this.props.renderModal(this.props.title)
    }

    render() {
        return (
            <Card style={{ width: '18rem', display: 'inline-flex', flex: 1 }}>
                <Card.Img variant="top" src={this.props.url} alt={this.props.title} onClick={this.renderModal} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.pargraph}
                    </Card.Text>
                    <Card.Text>
                        Num of likes : {this.state.numberOflikes}
                    </Card.Text>
                    <Button onClick={this.increseNoflikes}            >
                        Likes
                    </Button>
                    <Button onClick={this.renderModal}           >
                        More details
                    </Button>
                </Card.Body>
            </Card>
        )
    }
}

export default Hornedbeast;