import React, { Component } from 'react';

import NewNewsletterForm from '../newsletter/newsletterNewForm';

class NewRequest extends Component {

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
            <div className='new-request'>
                <NewNewsletterForm 
                    onCancel={() => this.props.onCancel()} 
                    onSubmit={(event) => this.onSubmit(event)}
                    formTitle= 'New Request'
                />
            </div>
        )
    }
}

export default NewRequest;