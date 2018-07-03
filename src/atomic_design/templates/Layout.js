import React from 'react'
import Header from './../atoms/Header'
import Footer from './../atoms/Footer'
import {Link} from 'react-router-dom'

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="wrapper" className="wrapper fix-top">
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }

}
export default MainLayout;
