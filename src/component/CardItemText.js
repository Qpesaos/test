import React from 'react'
import { Link } from 'react-router-dom'

function CardItemText(props) {
    return (
        <>
            <li className='cards__item__text'>
                <Link className='cards__item__text__link' to= {props.path}>
                    <figure className='cards__item__text__text-wrap' data-category={props.label}>
                        <img 
                            src={props.src} 
                            alt='Planet Image' 
                            className='cards__item__img' 
                        />
                    </figure>
                    <div className="cards__item__text__info">
                        <h5 className= "cards__item__text__text">{props.text}</h5>
                    </div>
                        
                </Link>
            </li>         
        </>
    )
}

export default CardItemText
