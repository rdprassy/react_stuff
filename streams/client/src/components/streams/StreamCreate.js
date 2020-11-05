import React from 'react';
import {Field, reduxForm} from 'redux-form';

//redux-form function behaves just like connect.

class StreamCreate extends React.Component {

    renderInput(formProps){
        return (
            <input
                onChange={formProps.input.onChange}
                value={formProps.input.value}
            />
        );

    }


    render(){
        console.log(this.props)
        // return <div>Stream Create</div>
    return (
        <form>
            <Field name="title" component = {this.renderInput} />
            <Field name="description" component = {this.renderInput} />
        </form>
    )

    }

};
// first argument is configuration
export default reduxForm({
    form: 'streamCreate'
})(StreamCreate);