import React, { Component } from 'react';

class RequestsItem extends Component {

    handleAddRequest = () => {
        this.props.history.push('./request/new');
    }
    
    render() {
        return (
            <div className='requests-item'>
                
            </div>
        )
    }
}

export default RequestsItem