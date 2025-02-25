import React from 'react';
import {connect} from 'react-redux';
//import {fetchUser} from '../actions'

class UserHeader extends React.Component {

    // componentDidMount(){
    //     this.props.fetchUser(this.props.userId);
    // }

    render() {
        // no more sending this.props.users we are sending only this.props.user
        //const user = this.props.users.find((user) => user.id === this.props.userId);

        const {user} = this.props;

        if(!user){
            return null;
        }
        return <div className="header">{user.name} </div>
    }
}

const mapStateToProps = (state, ownProps) => {
    // instead of sending the entire users array we send only the user to component.
    // return {users: state.users };

    return {user: state.users.find(user => user.id === ownProps.userId)}
}

export default connect(mapStateToProps  ) (UserHeader);

