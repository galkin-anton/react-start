var News = React.createClass({
  render: function() {
    return <h1>Hello React {this.props.name}</h1>;
  }
});
var App = React.createClass({
  render: function() {
    return <News name="hhh" />;
  }
});
ReactDOM.render(<App />, document.getElementById('root'));
