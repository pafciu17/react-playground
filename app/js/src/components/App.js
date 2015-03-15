var React = require('react'),
    IntroductionPage = require('./IntroductionPage'),
    InputPersonalDataPage = require('./InputPersonalDataPage');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="app">
                <InputPersonalDataPage />
            </div>
        );
    }
});