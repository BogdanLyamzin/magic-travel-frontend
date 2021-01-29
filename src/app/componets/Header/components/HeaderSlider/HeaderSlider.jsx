import React, {useState } from 'react';
import {CSSTransition} from 'react-transition-group';
import  './HeaderSlider.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft,faChevronRight} from '@fortawesome/free-solid-svg-icons';
import Button from './../../../../../shared/components/Button/Button';
const HeaderSlider = ({content}) => {
const [index, setIndex] = useState(0);
const [inProp, setInProp] = useState(true);

    const styles = {
        backgroundImage:`url(${content[index].image})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height:'100%',
    }

    const showPrevious = () =>{
        const length = content.length - 1;
        if(index === 0) {
            setIndex(length)
        }else{
            setIndex(index-1)
        }
        
    }

    const showNext = () =>{
        const length = content.length - 1;
        if(index === length) {
            setIndex(0)
        }else{
            setIndex(index+1)
        }
        
    }

    return (
                <div className="slider-wrapper">
                    <a className='previousButton' onClick={showPrevious}><FontAwesomeIcon icon={faChevronLeft} /></a>
                    <a className='nextButton' onClick={showNext}><FontAwesomeIcon icon={faChevronRight} /></a>
                    
                    < CSSTransition in={inProp} timeout={500} classNames="my-node" appear={true}
                       key={index} >
                         
                        <div key={index}
                            className="slider-content"
                            style={styles}>
                                <div className="inner">
                                <h1>{content[index].title}</h1>
                                <p></p>
                                <Button className="site-button">{content[index].button}</Button>
                            </div>
                        </div>
                    </CSSTransition>  
                </div>
        )
                        
}

export default HeaderSlider;