console.log('starts');
var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes');

console.log('ok');

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});