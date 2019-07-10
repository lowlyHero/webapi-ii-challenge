import React, { Component } from 'react';

import Post from './Post';

class Posts extends Component {
    render() {
        return (
            <div className='Posts'>
                <h1>Posts</h1>
                <ul>
                    {this.props.posts.map(post => {
                        return (
                            <Post 
                            title={post.title}
                            contents={post.contents}
                            created_at={post.created_at}
                            updated_at={post.updated_at}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default Posts;