import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import { createStream} from '../../actions'

//redux-form function behaves just like connect.

class StreamCreate extends React.Component {

    renderError({error,touched}){
        if(touched && error){
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }
    }

    renderInput= ({input, label, meta})=>{
        const className = `field ${meta.error && meta.touched?'error':''}`
        console.log(meta);
        return (

            <div className={className}>
                <label>{label}</label>
                <input {...input} autoCapitalize="off" />
                {this.renderError(meta)}

            </div>


        );

    }

    // this is due to redux forms
    onSubmit = (formValues) =>{
        console.log(formValues)
        this.props.createStream(formValues)
        // event.preventDefault();
    }


    render(){
       // console.log(this.props)
        // return <div>Stream Create</div>
    return (
        <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
            <Field name="title" component = {this.renderInput} label="Enter Title"/>
            <Field name="description" component = {this.renderInput} label="Enter Label"/>
            <button className="ui button primary">Submit</button>
        </form>
    )

    }

};

const validate = (formValues) => {

    const errors ={}
    if(!formValues.title) {
        errors.title = 'You must enter a title';
    }
    if(!formValues.description){
        errors.description = 'You must enter a description';
    }

    return errors;
}


// first argument is configuration
//one way of combining both connect and reduxForm
// export default connect()(reduxForm({
//     form: 'streamCreate', validate: validate
// })(StreamCreate));


//otherway

const formWrapped = reduxForm({
                  form: 'streamCreate', validate: validate
              })(StreamCreate);

export default connect(null, {createStream})(formWrapped);

