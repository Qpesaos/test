import React from 'react';
import CardItem from './CardItem';
import CardItemText from './CardItemText';

import './Cards.css';


function Cards() {
    return (
        <div className='cards'>
            <section className="section__container">
                <h1>Collectible & exclusive</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem
                                src="images/27.png"
                                text="7777 Unique planets"
                                label= 'Ever Minted'
                                path='/Rarity' 
                            />
                            <CardItem
                                src="images/Discover1.gif"
                                text="Amazing worlds to discover"
                                label= 'Galaxy'
                                path='/Rarity' 
                            />
                        
                        </ul>
                        {/* <h1>Roadmap</h1> */}
                        <ul className="cards__items">
                        
                            <CardItem
                                src="images/planets.gif"
                                text="Over 60 unique atributes"
                                label= 'Atributes'
                                path='/Rarity' 
                            />
                            <CardItem
                                src="images/3.png"
                                text="Over 1.1m Combinations"
                                label= 'Posible Combinations'
                                path='/Rarity' 
                            />
                           {/*  <CardItem
                                src="images/3.png"
                                text="Amazing worlds to discover"
                                label= 'Q3'
                                path='/Rarity' 
                            /> */}
                        
                        </ul>
                    
                    </div>
                </div>
            </section>

        </div>      
        
    )
}



//se pueden añadir todos los items que se quieran copiando y pegando <CardItem> ahora sólo hay 2 solplanets
//si se copia todo el segmento entre <ul></ul> se duplican las filas/culumnas. cada <ul> es un "grupo"
export default Cards

