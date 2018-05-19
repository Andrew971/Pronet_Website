import React, {Component} from "react";
import Mask from '../../Components/Mask'
import HeadTitle from '../../Components/HeadTitle'
import Button from '../../Components/Button'
import Data from '../../js/Data/en'


export default class HeaderEn extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { history} = this.props;
    const {header} = Data
    return (
        <Mask className="row">
              <HeadTitle className="col-12">{header.content}</HeadTitle>
            <div className="col-12" align="center">
              <Button onClick={() => { history.push(header.button.url) }} primary>{header.button.text}</Button>
            </div>
        </Mask>
    );
  }
}
