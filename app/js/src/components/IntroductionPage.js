var React = require('react'),
    Router = require('react-router');

var Link = Router.Link;

module.exports = React.createClass({
    render: function() {
        return (
            <div className="page">
                <h1>Introduction page</h1>
                <Link to="inputPersonalData">Continue</Link>
            </div>
        );
    }
});