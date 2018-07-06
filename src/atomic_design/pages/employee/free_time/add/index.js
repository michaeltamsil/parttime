import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

class Index extends Component {
  
  render = () => {

    return (<div>
      <Row>
        <Col>
          Add
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
          <Form>
            <FormGroup row>
              <Label sm={2}>Days</Label>
              <Col sm={10}>
                <Input type="text"/>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>);
  }
}
export default connect()(Index);
