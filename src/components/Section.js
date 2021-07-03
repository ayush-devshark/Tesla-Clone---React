import React from 'react';
import './Section.css';
import Fade from 'react-reveal/Fade';

function Section(props) {
    return (
        <div className={`wrap ${props.model}`}>
            <Fade bottom>
                <div className='itemText'>
                    <h1>{props.title}</h1>
                    <p>{props.description}</p>
                </div>
            </Fade>
            <div className='buttons'>
                <Fade bottom>
                    <div className='buttonGroup'>
                        <div className='button'>{props.leftBtnText}</div>
                        {props.rightBtnText && (
                            <div className='button right'>
                                {props.rightBtnText}
                            </div>
                        )}
                    </div>
                </Fade>
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
