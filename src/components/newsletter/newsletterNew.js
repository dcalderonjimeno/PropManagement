import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
        // if(button == 'submit') {
        //     // save new newsletter on the backend.
        // }

        this.props.history.push('/dashboard');
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

export default NewNewsletter;