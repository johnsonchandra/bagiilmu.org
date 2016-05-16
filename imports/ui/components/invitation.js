import React from 'react';
import { Link } from 'react-router';
import { Row, Col, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import { invitation } from '../../modules/invitation';

export class Invitation extends React.Component {
  componentDidMount() {
    invitation({ component: this });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return <Row>
        <Col xs={ 12 } sm={ 6 } md={ 4 }>
          <h4 className="page-header">Invite your Friends</h4>
          <form ref="invitation" onSubmit={ this.handleSubmit }>
            <FormGroup>
              <ControlLabel>
                <span className="pull-left">Fullname of your Friend</span>
              </ControlLabel>
              <FormControl
                type="text"
                ref="fullName"
                name="fullName"
                placeholder="Jane Doe"
              />
            </FormGroup>
            <FormGroup>
              <ControlLabel>Email Address</ControlLabel>
              <FormControl
                type="email"
                ref="emailAddress"
                name="emailAddress"
                placeholder="Email Address"
              />
            </FormGroup>
            <Button type="submit" bsStyle="success">Invite</Button>
          </form>
        </Col>
      </Row>;
  }
}
