import React, { Component } from 'react';

function ArchiveItem({title, date}) {
    return (
        <div className='archive-item'>
            <div className='archive-item__title'>{title}</div>
            <div className='archive-item__date'>{date}</div>
        </div>
    )
}

class NewsletterArchive extends Component {
    render() {
        return (
            <div className='newsletter-archive'>
                <div className='newsletter-archive__title'>{title}</div>
                <div className='newsletter-archive__items archive-items'>
                    {/* newsletter items */}
                    <ArchiveItem title='' date=''/>
                </div>
            </div>
        )
    }
}

export default NewsletterArchive;