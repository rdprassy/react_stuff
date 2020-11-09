
import React from "react";
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";


const App = () => {

    return (
        <div className="ui container comments">
            <ApprovalCard>
                <CommentDetail author="rdz" timeAgo="Today at 4:45PM" post="First Post" avatar={faker.image.avatar()} />
                <CommentDetail author="rdz" timeAgo="Today at 4:45PM" post="First Post" avatar={faker.image.avatar()} />
            </ApprovalCard>
    <ApprovalCard>
          <CommentDetail author="rdprassy" timeAgo="Today at 6:45PM" post="Second Post" avatar={faker.image.avatar()} />
    </ApprovalCard>
        </div>

    )
};

ReactDOM.render(<App/>, document.querySelector('#root'))