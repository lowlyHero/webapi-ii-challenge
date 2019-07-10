import React, {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(posts => this.setState({ posts }));
  }

  render() {
    return (
      <div className="App">
        <h1>Posts</h1>
        {this.state.posts.map(post =>
          <div key={post.created_at}>
          <h2>{post.title}</h2>
          </div>
        )}
      </div>
    );
  }
}

export default App;
