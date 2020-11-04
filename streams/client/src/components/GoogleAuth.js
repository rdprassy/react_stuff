import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {

   // state = {isSignedIn: null};

    componentDidMount() {

        //callback asynch of init
        window.gapi.load('client:auth2', ()=> {
        window.gapi.client.init({
            clientId: '140079335887-gn23ujqqidg6p1rgja8g28gdk0rf02k8.apps.googleusercontent.com',
            scope: 'email'
        }).then(() => {
            // once the api is loaded and done.
            this.auth = window.gapi.auth2.getAuthInstance();
            this.onAuthChange(this.auth.isSignedIn.get())
            //this.setState({isSignedIn: this.auth.isSignedIn.get()})
            this.auth.isSignedIn.listen(this.onAuthChange);
        })

        });
    }

    onAuthChange = (isSignedIn)=> {
        if(isSignedIn){
            this.props.signIn();
        }else{
            this.props.signOut();
        }
      //  this.setState({isSignedIn: this.auth.isSignedIn.get()})
    }

    onSignInClick =() =>{
        this.auth.signIn()
    }

    onSignOutClick =() =>{
        this.auth.signOut()

    }


    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null;
        }
        else if (this.props.isSignedIn){
            return (
             <button onClick={this.onSignOutClick} className="ui red google button">
                 <i className="google icon"/> Sign out
             </button>
            );
        }
        else{
            return (
               <button onClick={this.onSignInClick} className="ui red google button">
                   <i className="google icon" />
                   Sign In with Google
               </button>

            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

const mapStateToProps = (state)=>{
    return { isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);