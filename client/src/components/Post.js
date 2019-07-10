import React from 'react';

const Post = props => {
    return (
        <div className='Post'>
            <h2>{props.title}</h2>
            <h3>{props.contents}</h3>
            <p>Created at: {props.created_at}</p>
            <p>Updated at: {props.updated_at}</p>
        </div>
    );
};

export default Post;