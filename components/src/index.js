import React from 'react';
import ReactDOM from 'react-dom';
// import faker from 'faker';
import ApprovalCard from './ApprovalCard';
import CommentDetails from './CommentDetails';

const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>Are you sure you want to do this?</div>
                <CommentDetails author='Sally' timeAgo='Today at 4:50PM' avatar='https://source.unsplash.com/random' commentContent='Sally Sells Sea Shells'></CommentDetails>
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails author='Sam' timeAgo='Today at 4:45PM' avatar='https://source.unsplash.com/random' commentContent='Blog post example' />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author='Alex' timeAgo='Yesterday at 4:00PM' avatar='https://source.unsplash.com/random' commentContent='Lorem Ipsum' />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetails author='Tom' timeAgo='2 days ago' avatar='https://source.unsplash.com/random' commentContent='Taco bell is rad' />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));