import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions'

import EditNewsletterForm from './newsletterEditForm';

class EditNewsletter extends Component {

    onSubmit = fields => {
        const { title, body, image } = fields;

        var fromData = new FormData();
        fromData.append('title', title);
        formData.append('body', body);
        formData.append('image', image);

        this.props.editNewsletter(this.props.match.params.id, formData, () => {
            this.props.history.push('/dashboard');
        })
    }

    onCancel = () => {
        this.props.history.push('/dashboard');
    }

    componentDidMount() {
        this.props.fetchNewsletterWithId(this.props.match.params.id);
    }

    render() {
        return (
            <div className='new-newsletter'>
                <EditNewsletterForm 
                    onCancel={() => this.props.onCancel()} 
                    onSubmit={(event) => this.onSubmit(event)}
                    formTitle= 'Edit Newsletter'
                    fieldOneTitle='Newsletter Title'
                    fieldTwoTitle='Newsletter Body'
                />
            </div>
        )
    }
}

export default connect(null, actions)(EditNewsletter);