import React,{Fragment} from "react";
import {NavLink} from 'react-router-dom';
import HeadTitle from '../../Components/HeadTitle'
import Button from '../../Components/Button'
import {SocialMedia} from '../../js/socialMedia'
import Data from '../../js/Data/fr'



export const FooterFr = () => {
  return (
    <Fragment>
      <div className="col-12 row align-items-center" align="center">
      <HeadTitle className="col-12 col-md-12 col-lg-9 footer-content">{Data.footer.content}</HeadTitle>
      <div className="col-12 col-md-12 col-lg-3 footer-content" align="center">
<Button primary>{Data.footer.button.text}</Button>
    </div>
      </div>

      <div className="row" align="center">
        <div className="col-12 col-md-12 footer-content">
          <ul className="">
          <li className="">
          <NavLink to="/">
            <h5 className="">
              Acceuil
            </h5>
          </NavLink>
        </li>
          <li className="">
          <NavLink to="/search">
            <h5 className="">
              Contact
            </h5>
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/store">
            <h5 className="">
Recrutement
            </h5>
          </NavLink>
        </li>
        <li className="">
          <NavLink to="/privacy-policy">
            <h5 className="">
Mentions Légal
     </h5>
          </NavLink>
        </li>
      </ul></div>

        <div className="col-12 col-md-12 footer-content" align="center">
<SocialMedia />
</div>
        <div className="col-12 col-md-12 footer-content" align="center">
{Data.copyright}
  </div>
</div>

</Fragment>
  );
};
