import React from 'react';

const Post = props => {
    return (
        <div className='Post'>
            <h4>{props.title}</h4>
            <h5>{props.contents}</h5>
            <p><em>Created at: {props.created_at}</em></p>
            <p><em>Updated at: {props.updated_at}</em></p>
        </div>
    );
};

export default Post;