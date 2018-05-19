import React, {Component} from 'react';
import {connect} from 'react-redux';
import Footer from '../../Components/Footer'
import Mask from '../../Components/Mask'
import background from '../../Assets/img/background1.jpg';
import FooterContent from '../../Content/Footer';

class FooterContainer extends Component {

  render() {

    return (<Footer src={background}>
      <Mask primary>

        <FooterContent />
      </Mask>
    </Footer>);
  }
}
const mapStateToProps = (state) => {
  return {Theme: state.UI.Theme};
};

export default connect(mapStateToProps)(FooterContainer);
