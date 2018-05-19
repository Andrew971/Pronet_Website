import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom'
import Header from '../../Components/Header'
import HeaderContent from '../../Content/Header'

import background from '../../Assets/img/background1.jpg';

class HeaderContainer extends Component {

  render() {

    return (<Header src={background}>
<HeaderContent />
    </Header>);
  }
}
const mapStateToProps = (state) => {
  return {};
};

export default withRouter(connect(mapStateToProps)(HeaderContainer));
