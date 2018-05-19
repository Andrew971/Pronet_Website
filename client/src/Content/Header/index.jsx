import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import HeaderFr from './fr'
import HeaderEn from './en'

class Header extends Component {

  render() {
    const {Language, history} = this.props
    switch (Language) {
      case 'Fr':
        return (<HeaderFr history={history}/>)
      case 'En':
        return (<HeaderEn history={history}/>)
      default:
        return (<HeaderFr history={history}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(Header));
