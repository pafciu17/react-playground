var React = require('react'),
    Router = require('react-router');

var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    RouteHandler = Router.RouteHandler;

module.exports = React.createClass({
    mixins: [ Router.State ],
    render: function () {
        var name = this.getRoutes().slice(0).reverse()[0].name;
        return (
            <div className="app">
                <RouteHandler key={name}/>
            </div>
        );
    }
});