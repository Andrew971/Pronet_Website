import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import HomeFr from './fr'
import HomeEn from './en'

class Home extends Component {

  render() {
    const {Language} = this.props
    switch (Language) {
      case 'Fr':
        return (<HomeFr/>)
      case 'En':
        return (<HomeEn/>)
      default:
        return (<HomeFr/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(Home));
