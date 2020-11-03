import React from 'react';

class GoogleAuth extends React.Component {

    state = {isSignedIn: null};

    componentDidMount() {

        //callback asynch of init
        window.gapi.load('client:auth2', ()=> {
        window.gapi.client.init({
            clientId: '140079335887-gn23ujqqidg6p1rgja8g28gdk0rf02k8.apps.googleusercontent.com',
            scope: 'email'
        }).then(() => {
            // once the api is loaded and done.
            this.auth = window.gapi.auth2.getAuthInstance();
            this.setState({isSignedIn: this.auth.isSignedIn.get()})
        })
        });
    }


    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div> I dont know if we are signed in </div>;
        }
        else if (this.state.isSignedIn){
            return <div> I am signed in!</div>
        }
        else{
            return <div> I am not signed in!</div>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>
    }
}

export default GoogleAuth;