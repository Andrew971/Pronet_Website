import React, {Component} from "react";
import NavItem from "../../Components/NavLink";
import {withRouter,NavLink} from "react-router-dom";
import {UIAction} from "../../Modules/UI";
import {connect} from "react-redux";


export  class NavItemEn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const {Language,dispatch,history} = this.props;

    return (
      <NavItem>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
              Services
              <div className="dropdown-content">
                <span onClick={() => { history.push("/classic") }}>Classic</span>
                <span onClick={() => { history.push("/specific") }}>Specific</span>
                <span onClick={() => { history.push("/multi_service") }}>Multi-Service</span>
              </div>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
          {Language}
              <div className="dropdown-content">
                <span onClick={e => {
                    dispatch(UIAction({type: "CHANGE_LANG", payload: "Fr"}));
                  }}>Fr</span>
                <span onClick={e => {
                    dispatch(UIAction({type: "CHANGE_LANG", payload: "En"}));
                  }}>En</span>
              </div>
          </li>
        </ul>
      </NavItem>
    );
  }
}
const mapStateToProps = state => {
  return {Language: state.UI.Language};
};

export default withRouter(connect(mapStateToProps)(NavItemEn));
