var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="/profile/:id" component={Profile} />
      // <Route path="/signup" component={Signup} />     
      // <Route path="/login" component={Login} />     
    </Route>
  </Router>
)