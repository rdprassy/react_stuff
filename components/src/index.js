
import React from "react";
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from "./CommentDetail";


const App = () => {

    return (
        <div className="ui container comments">
          <CommentDetail author="rdz" timeAgo="Today at 4:45PM" post="First Post" avatar={faker.image.avatar()} />
          <CommentDetail author="rdprassy" timeAgo="Today at 6:45PM" post="Second Post" avatar={faker.image.avatar()} />
        </div>

    )
};

ReactDOM.render(<App/>, document.querySelector('#root'))