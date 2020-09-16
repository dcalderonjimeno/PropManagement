import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {

        const { title, body, image } = fields;

        var fromDate = new FormData();
        fromData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);

        this.props.createNewNewsletter(this.props._id, formData, () => {
            this.props.history.push('/dashboard');
        })
    }

    onCancel = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm 
                    onCancel={() => this.props.onCancel()} 
                    onSubmit={(event) => this.onSubmit(event)}
                    formTitle= 'New Newsletter'
                    fieldOnePlaceholder='Service Newsletter Title (Here)'
                    fieldOneTitle='Newsletter Title'
                    fieldTwoPlaceholder='Text Body (Here)'
                    fieldTwoTitle='Body'
                />
            </div>
        )
    }
}

NewNewsletter = connect(null, actions)(NewNewsletter);

export default NewNewsletter;