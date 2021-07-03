import React from 'react';
import './Section.css';

function Section(props) {
    return (
        <div className={`wrap ${props.model}`}>
            <div className='itemText'>
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
            <div className='buttons'>
                <div className='buttonGroup'>
                    <div className='button'>{props.leftBtnText}</div>
                    {props.rightBtnText && (
                        <div className='button right'>{props.rightBtnText}</div>
                    )}
                </div>
                <img
                    src='/images/down-arrow.svg'
                    alt='down-arrow svg'
                    className='downArrow'
                />
            </div>
        </div>
    );
}

export default Section;
