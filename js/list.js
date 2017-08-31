class List extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.state = { list: [] };
  }

  add(e) {
    e.preventDefault();
    let value = e.target.listValue.value;
    e.target.listValue.value = '';
    console.log(value);
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
          <input type="text" name="listValue" />
          <input type="submit" value="add" />
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
          return <li>{e}</li>;
        })}
      </ul>
    );
  }
}

ReactDOM.render(<List />, document.getElementById('list'));
