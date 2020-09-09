import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

import AnimateHeight from 'react-animate-height';

class RequestsItem extends Component {

    constructor() {
        super()

        this.state = {
            height: 0
        }
    }

    toggleDropdown = () => {
        if(this.state.height == 0) {
            this.setState({height: 'auto'})
        } else {
            this.setState({height: 0})
        }
    }
    
    render() {
        return (
            <div className='requests-item'>
                <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle'/>
                <div className='requests-item__title'>
                    <div className='requests-item__title__text'>My door fell down</div>
                    <Icon callback={() => this.toggleDropdown()} className='requests-item__title__arrow' icon='fas fa-short-down'/>
                </div>
                <div className='requests-item__tenant__title'>
                    Max - Unit 115
                </div>
                
                <div className='requests-item__date'>
                    14/7/1997
                </div>
                <Button className='requests-item__move' icon='fas fa-wrench' callback={() => console.log('try something')}/>

                <div className='requests-item__description'>
                    <AnimateHeight
                        duration={300}
                        height={this.state.height}
                    >
                        <div className='requests-item__description'>
                            <img 
                                className='requests-item__decription-img'
                                src='http://via.placeholder.com/160x94'
                            />
                            <p className='requests-item__decription-text'>
                                lorem IpsumIpsum lorem IpsumIpsum lorem IpsumIpsum 
                            </p>
                        </div>
                    </AnimateHeight>
                </div>
            </div>
        )
    }
}

export default RequestsItem