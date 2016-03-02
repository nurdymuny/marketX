// import {Tab, Tabs} from 'react-toolbox';
// var React = require('react')
var ReactDOM = require('react-dom');
var TabsExample = React.createClass({
  displayName: 'TabsExample',

  // class TabsExample extends React.Component {
  // state: {
  //   index: 1
  // }

  // handleTabChange: (index) => {
  //   this.setState({index});
  // }

  render: function () {
    return React.createElement(
      Tabs,
      { index: this.state.index, onChange: this.handleTabChange },
      React.createElement(
        Tab,
        { label: 'Primary' },
        React.createElement(
          'small',
          null,
          'Primary content'
        )
      ),
      React.createElement(
        Tab,
        { label: 'Secondary' },
        React.createElement(
          'small',
          null,
          'Secondary content'
        )
      ),
      React.createElement(
        Tab,
        { label: 'Third', disabled: true },
        React.createElement(
          'small',
          null,
          'Disabled content'
        )
      ),
      React.createElement(
        Tab,
        { label: 'Fourth', hidden: true },
        React.createElement(
          'small',
          null,
          'Fourth content hidden'
        )
      ),
      React.createElement(
        Tab,
        { label: 'Fifth' },
        React.createElement(
          'small',
          null,
          'Fifth content'
        )
      )
    );
  }
});

ReactDOM.renderComponent(React.createElement(TabsExample, null), document.getElementById('navigations'));