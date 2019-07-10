import React, {Component} from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';

import Posts from './components/Posts';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
    .get('http://localhost:3000/posts')
    .then((posts) => {
      this.setState({ posts: posts.data })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  render() {
    return (
      <div className="App">
        <Route path='/posts' render={props => {
          return (
            <div>
            
              <Posts {...props} posts={this.state.posts} />
            </div>
          )
        }}
        />
      </div>
    );
  }
}

export default App;
