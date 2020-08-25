import React, { Component } from 'react';

class NewsletterLatest extends Component {
    render () {
        const { body, title, imageUrl } = this.props;
        return (
            <div className='newsletter-latest'>
                <h1 className='newsletter-latest__title'>{title}</h1>
                <img className='newsletter-latest__image' src={this.props.imageUrl}/>
                <div className='newsletter-latest__body'>
                    <p>{body}</p>
                </div>
            </div>
        )
    }
}

export default NewsletterLatest;