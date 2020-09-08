import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component {
    
    render() {
        return (
            <div className='requests-item'>
                <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle'/>
                <div className='requests-item__title'>
                    My door fell down
                </div>
                <div className='requests-item__tenant__title'>
                    Max - Unit 115
                </div>
                <Icon className='requests-item__arrow' icon='fas fa-short-down'/>
                <div className='requests-item__date'>
                    14/7/1997
                </div>
                <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('try something')}/>
            </div>
        )
    }
}

export default RequestsItem