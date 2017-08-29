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

var News = React.createClass({
  render: function() {
    let data = this.props.data;
    let template;
    if (data.length > 0) {
      template = data.map(function(news, index) {
        return (
          <div key={index}>
            <p className="news__author">
              {news.author}:
            </p>
            <p className="news__text">
              {news.text}
            </p>
          </div>
        );
      });
    } else {
      template = <div>Сообщений нет</div>;
    }

    return (
      <div>
        {template}
        <strong className={data.length > 0 ? '' : 'none'}>
          Всего новостей {data.length}
        </strong>
      </div>
    );
  }
});

var Comments = React.createClass({
  render: function() {
    return <div className="comments">Комментариев нет</div>;
  }
});

var App = React.createClass({
  render: function() {
    return (
      <div className="app">
        HI! I am react component!
        <News data={myNews} />
        <Comments />
      </div>
    );
  }
});

ReactDOM.render(<App />, document.getElementById('root'));
