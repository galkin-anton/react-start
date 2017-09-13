var myNews = [
  {
    author: 'Galkin_AB',
    text: 'News 1',
    bigText: 'big text1'
  },
  {
    author: 'Galkin_AB',
    text: 'News 2',
    bigText: 'big text2'
  },
  {
    author: 'Galkin_AB',
    text: 'News 3',
    bigText: 'big text3'
  },
  {
    author: 'Galkin_AB',
    text: 'News 4',
    bigText: 'big text4'
  }
];
// myNews = [];

class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.click = this.click.bind(this);
  }

  click(e) {
    e.preventDefault();
    this.setState(prev => {
      return { visible: !prev.visible };
    });

    console.log(this.props);
    console.log('Clicked with scope', this);
  }

  render() {
    let { author, text, bigText } = this.props.data;
    return (
      <div className="article">
        <p className="news__author">
          {author}:
        </p>
        <p className="news__text">
          {text}
        </p>
        <a href="#" className="news__readmore" onClick={this.click}>
          {' '}Подробнее{' '}
        </a>
        <p className="news__big-text">
          {bigText}
        </p>
        <p className={this.state.visible ? '' : 'none'}>
          Это доплнительная информация
        </p>
      </div>
    );
  }
}

Article.propTypes = {
  data: React.PropTypes.shape({
    author: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired
  })
};

class News extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    console.log('update');
  }

  render() {
    let data = this.props.data;
    let template;
    if (data.length > 0) {
      template = data.map(function(news, index) {
        return (
          <div key={index}>
            <Article data={news} />
          </div>
        );
      });
    } else {
      template = <div>Сообщений нет</div>;
    }

    return (
      <div className="news">
        {template}
        <strong className={'news__count' + (data.length > 0 ? '' : ' none')}>
          Всего новостей {data.length}
        </strong>
      </div>
    );
  }
}

News.propTypes = {
  data: React.PropTypes.array.isRequired
};

class Comments extends React.Component {
  render() {
    return <div className="comments">Комментариев нет</div>;
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <h3>Новости</h3>
        <News data={myNews} />
        {/*data={myNews}*/}
        <Comments />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
