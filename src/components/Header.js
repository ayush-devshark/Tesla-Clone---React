import React, { useState } from 'react';
import './Header.css';
import CloseIcon from '@material-ui/icons/Close';

function Header() {
    const [menuNavStatus, setMenuNavStatus] = useState(false);
    return (
        <div className='header'>
            <a href='#a'>
                <img src='/images/logo.svg' alt='' />
            </a>
            <div className='menu'>
                <a href='#'>Model S</a>
                <a href='#'>Model Y</a>
                <a href='#'>Model 3</a>
                <a href='#'>Model X</a>
                <a href='#'>Solar Roof</a>
                <a href='#'>Solar Panels</a>
            </div>
            <div className='rightMenu'>
                <a href='#'>Shop</a>
                <a href='#'>Account</a>
                <a
                    href='#a'
                    onClick={() => {
                        setMenuNavStatus(true);
                    }}
                >
                    Menu
                </a>
            </div>
            <div className={menuNavStatus ? 'menuNav' : 'menuNav menuClose'}>
                <CloseIcon
                    className='close'
                    onClick={() => {
                        setMenuNavStatus(false);
                    }}
                />
                <li>
                    <a href='#'>Model S</a>
                </li>
                <li>
                    <a href='#'>Model X</a>
                </li>
                <li>
                    <a href='#'>Existing Inventory</a>
                </li>
                <li>
                    <a href='#'>Used Inventory</a>
                </li>
                <li>
                    <a href='#'>Trade-In</a>
                </li>
                <li>
                    <a href='#'>Cybertruck</a>
                </li>
                <li>
                    <a href='#'>Roadster</a>
                </li>
            </div>
        </div>
    );
}

export default Header;
