import React from 'react';
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {

    static contextType = LanguageContext; // only required for this.context

    // equal to Button.contextType= LanguageContext

    render(){
        console.log(this.context)
        const text = this.context === 'english'? 'Submit': 'Voorleggen';
        // return (<button className = "ui button primary"> {text} </button>);
        return (
            <ColorContext.Consumer>
                {(color) =>   <button className = {`ui button ${color}`}> <LanguageContext.Consumer>{(value)=> value === 'english'? 'Submit': 'Voorleggen' }</LanguageContext.Consumer> </button> }

            </ColorContext.Consumer>
        );
    }
}

export default Button;