import React, { Component } from 'react'
import { Collapse, CardBody, Card } from 'reactstrap';
import Link from 'next/link'

const menus = [
    {
        id: 1,
        title: 'Home',
        link: '/Home',
        
    },

    {
        id: 2,
        title: 'About',
        link: '/About',
    },

{
    id: 3,
        title: 'Causes',
        link: '/Causes',
        submenu: [
            {
                id: 31,
                title: 'All Causes',
                link: '/Causes'
            },
            {
                id: 32,
                title: 'Fundi Fund 12412',
                link: '/FundiFund12412'
            },
            {
                id: 33,
                title: 'Unite 4 Schools',
                link: '/Unite4Schools'
            },
            {
                id: 34,
                title: 'Leaders4Learners',
                link: '/Leaders4Learners'
            },
            {
                id: 35,
                title: 'R10 Goes a Long Way',
                link: '/R10GoesALongWay'
            },
            {
                id: 36,
                title: 'Fundi CSI',
                link: '/FundiCsi'
            }
        ]
    },
{
    id: 4,
        title: 'Press',
        link: '/Press',
      
    },
    
    {
        id: 88,
        title: 'Contact',
        link: '/Contact',
    }
    
    
]


export default class MobileMenu extends Component {

    state = {
        isMenuShow: false,
        isOpen: 0,
    }

    menuHandler = () => {
        this.setState({
            isMenuShow: !this.state.isMenuShow
        })
    }

    setIsOpen = id => () => {
        this.setState({
            isOpen: id === this.state.isOpen ? 0 : id
        })
    }

    render() {

        const { isMenuShow, isOpen } = this.state;

        return (
            <div>
                <div className={`mobileMenu ${isMenuShow ? 'show' : ''}`}>
                    {/* <div className="clox" onClick={this.menuHandler}>Close Me</div> */}

                    <ul className="responsivemenu">
                        {menus.map(item => {
                            return (
                                <li key={item.id}>
                                    {item.submenu ? <p onClick={this.setIsOpen(item.id)}>
                                        {item.title}
                                        {item.submenu ? <i className="fa fa-angle-right" aria-hidden="true"></i> : ''}
                                    </p> : <Link href={item.link}>{item.title}</Link>}
                                    {item.submenu ?
                                    <Collapse isOpen={item.id === isOpen}>
                                        <Card>
                                            <CardBody>
                                                <ul>
                                                    {item.submenu.map(submenu => (
                                                        <li key={submenu.id}><Link className="active" href={submenu.link}>{submenu.title}</Link></li>
                                                    ))}
                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                    : ''}
                                </li>
                            )
                        })}
                    </ul>

                </div>

                <div className="showmenu" onClick={this.menuHandler}><i className="fa fa-bars" aria-hidden="true"></i></div>
            </div>
        )
    }
}
