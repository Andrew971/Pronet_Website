import React, {Component} from 'react';
import Home from '../../Content/Home';
import {withRouter, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux';

class MainContainer extends Component {

  render() {
    return (<main>

      <Switch>
        <Route exact path='/' render={(routeProps) => <Home {...routeProps}/>}/>

        <Route exact path='/contact' render={(routeProps) => <Home {...routeProps}/>}/>
      </Switch>
    </main>)
  }
}
const mapStateToProps = (state) => {

  return {}

}

export default withRouter(connect(mapStateToProps)(MainContainer));
