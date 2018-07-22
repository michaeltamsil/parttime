import React, { Component } from 'react'
import {Col, Row } from 'reactstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

class Index extends Component {
  
  render = () => {
    return (<div>
      <Row>
        <Col sm={{
          size: 4,
          offset: 4
        }} className="text-center">
          <FontAwesomeIcon icon={faUserCircle} size="6x" />
          <h3>Hendra Cihuyy</h3>
          Job Applied : 3<br/>
          Job Approved : 1<br/>
          See profile on facebook: click here
        </Col>
      </Row>
      
    </div>);
  }
}
export default Index;