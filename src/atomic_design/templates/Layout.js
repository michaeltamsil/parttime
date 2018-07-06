import React from 'react'
import Header from './../atoms/Header'
import Footer from './../atoms/Footer'
import { Container } from 'reactstrap'

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (<Container>
        <Header {...this.props}/>
          {this.props.children}
      </Container>)
  }

}
export default MainLayout;
