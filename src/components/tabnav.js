import React, { Component } from 'react';


class TabNav extends Component {
    render() {
        return (
            <div className='tab-nav'>
                <div className='tab-nav__tabs'>
                {
                this.props.tab.map((tab, index) => {
                    return <a className='tab-nav__tab'>{tab.title}</a>   
                })
                }
                </div>
                <div>
                    {/* request and newsletters goes here */}
                </div>
            </div>
        )
    }
}

export default TabNav;