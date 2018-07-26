import React, { Component } from 'react'
import {Col, NavLink, Row } from 'reactstrap'

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
          <img src="https://scontent-sit4-1.xx.fbcdn.net/v/t1.0-1/p160x160/20031817_338977203208788_1606039566850681925_n.jpg?_nc_cat=0&oh=033bf264431ecb85bf59e339635a2b4a&oe=5BD2EEAE"/>
          <h3><NavLink href="https://www.facebook.com/azazel4041" target="_blank">azazel4041</NavLink></h3>
          Job Applied : 3<br/>
          Job Approved : 1<br/>
        </Col>
      </Row>
      
    </div>);
  }
}
export default Index;