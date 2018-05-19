import React, {Component} from "react";
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux';
import {FooterFr} from './fr'
import {FooterEn} from './en'

class FooterContent extends Component {

  render() {
    const {Language, history} = this.props
    switch (Language) {
      case 'Fr':
        return (<FooterFr history={history}/>)
      case 'En':
        return (<FooterEn history={history}/>)
      default:
        return (<FooterFr history={history}/>);
    }
  }
}

const mapStateToProps = (state) => {

  return {Language: state.UI.Language}

}
export default withRouter(connect(mapStateToProps)(FooterContent));
