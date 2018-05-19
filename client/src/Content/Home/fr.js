import React, {Component, Fragment} from "react";
import Card from "../../Components/Card";
import Avatar from "../../Components/Avatar";
import Headlines from "../../Components/Headlines";
import Data from '../../js/Data/fr'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Title from "../../Components/Title";


const Services = () => (
  <Fragment>
  {
    Data.services.map(content =>
      <Card  className="row align-items-center justify-content-center" key={content.key} primary={content.key % 2 ? false : true}>
        <div
        className={content.key % 2 ? "col-12 order-first order-md-last col-md-5" : "col-md-5"}
        style={{margin: "auto"}}
        align="center"
      >
        <Avatar img={content.img}/>
      </div>
      <div className="col-12 col-md-7">
        <Headlines>
          <h1>{content.title}</h1>
          <h3>{content.sub}</h3>
          {content.body}
        </Headlines>
      </div>
</Card>
    )}
  </Fragment>

)
;

const Company = () =>
(
  <Fragment>
  {
    Data.company.map(content =>
      <Card  className="row align-items-center justify-content-center" key={content.key}>
      <div className="col-12 col-md-12">
        <Headlines>
          <h1>{content.title}</h1>
          <h3>{content.sub}</h3>
          {content.body}
        </Headlines>
      </div>
</Card>
    )}
  </Fragment>

)
;


const Client = () => (
  <Card  className="row align-items-center justify-content-center">
    <Title className="col-12" primary>{Data.clientTitle}</Title>
    {
      Data.client.map(project =>
        <Fragment key={project.key}>
          <div className="col-md-3" align="center">
        <div className="col-md-12">
        <img className="img-fluid card-img-top" src={project.img} alt="Card cap" style={{borderRadius:'50%'}}/>
      </div>
      <div className="col-md-12 card-body">
        <h2 className="card-title">{project.name}</h2>
      </div>
    </div>
    </Fragment>
      )
    }
  </Card>
);

export default class HomeFr extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount() {
    AOS.init({
      duration: 1200
    })
    AOS.refresh()
  }
  render() {

    return (
      <Fragment>
        <Company/>
        <Services/>
        <Client />
      </Fragment>
    );
  }
}
