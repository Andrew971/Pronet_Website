import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import NavItemFr from './fr'
import NavItemEn from './en'

class NavItem extends Component {

  render() {
    const {Language} = this.props
    switch (Language) {
      case 'Fr':
        return (<NavItemFr/>)
      case 'En':
        return (<NavItemEn/>)
      default:
        return (<NavItemFr/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(NavItem));
