class List extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.checkChange = this.checkChange.bind(this);
    this.state = { list: [], submitDisabled: true };
  }

  componentDidMount() {
    console.log(this.refs);
    //ReactDOM.findDOMNode(this.refs.listValue).focus();
    //Зачем ReactDOM ????
    this.refs.listValue.focus();
  }

  checkChange(e) {
    this.setState({ submitDisabled: !e.target.checked });
  }
  add(e) {
    e.preventDefault();
    let element = e.target.listValue;
    let value = element.value.trim();
    if (!value) return;
    element.value = '';
    element.focus();

    myNews.push({ author: 'Galkin_AB', bigText: value, text: value });
    console.log(myNews);

    this.setState(ps => {
      return { list: ps.list.concat(value) };
    });
  }

  render() {
    let list = this.state.list;
    return (
      <div>
        <Ul list={list} />
        <form onSubmit={this.add}>
          <input type="text" name="listValue" ref="listValue" />
          <input
            type="submit"
            value="add"
            disabled={this.state.submitDisabled}
          />
          <input type="checkbox" onChange={this.checkChange} />
        </form>
      </div>
    );
  }
}

class Ul extends React.Component {
  render() {
    let list = this.props.list;
    return (
      <ul>
        {list.map(e => {
          return (
            <li>
              {e}
            </li>
          );
        })}
      </ul>
    );
  }
}

ReactDOM.render(<List />, document.getElementById('list'));
