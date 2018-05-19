import React, {Component} from 'react';
import {connect} from 'react-redux';
import './styles.css'
import {ThemeProvider} from 'styled-components';
import Nav from './Nav'
import Header from './Header'
import Main from './Main';
import Footer from './Footer';

class Containers extends Component {

  render() {
    const {Theme} = this.props
    return (<ThemeProvider theme={Theme}>
      <div className="container-fluid">
        <Nav/>
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </ThemeProvider>);
  }
}
const mapStateToProps = (state) => {
  return {Theme: state.UI.Theme};
};

export default connect(mapStateToProps)(Containers);
