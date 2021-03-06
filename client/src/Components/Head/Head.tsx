import React from 'react';
import { NavLink } from 'react-router-dom';

import HeadButton from './HeadButton';
import './Head.css';
import logo2 from '../../assets/images/logo2.jpg';
import { MainReturn } from './HeadContainer';

const Head: React.FC<MainReturn> = (props): JSX.Element => {
    if (props.isAuth) {
        return (<div className='header header_visitor'>
            <div className='header__section'>
                <div className='header-logo'>
                    <NavLink to={'/profile'}>
                        <img width='20px' height='20px' src={logo2} alt='img' />
                    </NavLink>
                </div>
                <HeadButton {...props} numOfButton='6' />
                <HeadButton {...props} numOfButton='7' />
                <HeadButton {...props} numOfButton='8' />
                <HeadButton {...props} numOfButton='9' />
                <HeadButton {...props} numOfButton='10' />
            </div>
            <div className='header__section'>
                <div>
                    <NavLink className='link-wrapper-header-user' onClick={props.logoutAttr} to=''>
                        {props.Headings[11]}
                    </NavLink>
                </div>
            </div>
        </div >)
    }

    return (<div className='header header_visitor'>
        <div className='header__section'>
            <div className='header-logo'>
                <NavLink to="/">
                    <img width="20px" height="20px" src={logo2} alt="img" />
                </NavLink>
            </div>
            <HeadButton {...props} numOfButton='0' />
            <HeadButton {...props} numOfButton='1' />
            <HeadButton {...props} numOfButton='2' />
            <HeadButton {...props} numOfButton='3' />
        </div>
        <div className='header__section'>
            <HeadButton {...props} numOfButton='4' />
            <HeadButton {...props} numOfButton='5' />
        </div>
    </div>)
}

export default Head;