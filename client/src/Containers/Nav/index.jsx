import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import NavBar from "../../Components/NavBar";
import logo from '../../Assets/img/logo.png';
import DesktopView from "../../Components/DesktopView";
import MobileView from "../../Components/MobileView";
import BrandTitle from "../../Components/BrandTitle";
import NavItem from "../../Content/NavLink";

class Nav extends Component {
  render() {
    return (<NavBar className="row">
      <BrandTitle to="/" className="col-6 col-md-2">
        <img src={logo} className="App-logo" alt="logo"/>
      </BrandTitle>
      <DesktopView className="col-sm col-md">
        <NavItem/>
      </DesktopView>
      <MobileView className="col">
        test
      </MobileView>
    </NavBar>);
  }
}
const mapStateToProps = state => {
  return {Language: state.UI.Language};
};

export default withRouter(connect(mapStateToProps)(Nav));
