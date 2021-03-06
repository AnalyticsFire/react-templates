'use strict';
var React = require('react-native');
var _ = require('lodash');
function renderRow1(rowData) {
    return React.createElement(React.Text, {}, rowData);
}
function renderRow2(item) {
    return React.createElement(React.Text, {}, item);
}
module.exports = function () {
    return React.createElement(React.View, {}, React.createElement(React.ListView, {
        'dataSource': this.state.dataSource,
        'renderRow': renderRow1.bind(this)
    }), React.createElement(MyComp, {
        'data': [
            1,
            2,
            3
        ],
        'renderRow': renderRow2.bind(this)
    }));
};