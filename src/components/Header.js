import React, { useState } from 'react';
import './Header.css';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
    const [menuNavStatus, setMenuNavStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <div className='header'>
            <a href='#a'>
                <img src='/images/logo.svg' alt='' />
            </a>
            <div className='menu'>
                {cars &&
                    cars.map((car, index) => (
                        <a key={index} href='#'>
                            {car}
                        </a>
                    ))}
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
                {cars &&
                    cars.map((car, index) => (
                        <li key={index}>
                            <a href='#'>{car}</a>
                        </li>
                    ))}
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
