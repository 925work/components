import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';

import CommentDetails from './CommentDetails';

const App = () => {
    return (
        <div className="ui container comments">
            <CommentDetails author='Sam' timeAgo='Today at 4:45PM' avatar='https://source.unsplash.com/random' commentContent='Blog post example' />
            <CommentDetails author='Alex' timeAgo='Yesterday at 4:00PM' avatar='https://source.unsplash.com/random' commentContent='Lorem Ipsum' />
            <CommentDetails author='Tom' timeAgo='2 days ago' avatar='https://source.unsplash.com/random' commentContent='Taco bell is rad' />
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));