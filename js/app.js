var myNews = [
  {
    author: 'Galkin_AB',
    text: 'News 1'
  },
  {
    author: 'Galkin_AB',
    text: 'News 2'
  },
  {
    author: 'Galkin_AB',
    text: 'News 3'
  },
  {
    author: 'Galkin_AB',
    text: 'News 3'
  }
];
// myNews = [];

class Article extends React.Component {
  render() {
    let author = this.props.data.author;
    let text = this.props.data.text;

    return (
      <div className="article">
        <p className="news__author">
          {author}:
        </p>
        <p className="news__text">
          {text}
        </p>
      </div>
    );
  }
}

class News extends React.Component {
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
        <strong className={'news__count ' + (data.length > 0 ? '' : 'none')}>
          Всего новостей {data.length}
        </strong>
      </div>
    );
  }
}

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
        <Comments />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
