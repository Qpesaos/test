import React from 'react';
import CardItem2 from './CardItem';
import CardItemText from './CardItemText';
import ImageSlider from './ImageSlider';


import './Cards2.css';


function Cards2() {
    return (
        <div className='cards2'>
            <section className="section__container2">
                <h1>Sneak Peak</h1>
                <h1> </h1>
                
                <ImageSlider/>                 
            </section>

        </div>      
        
    )
}



//se pueden añadir todos los items que se quieran copiando y pegando <CardItem> ahora sólo hay 2 solplanets
//si se copia todo el segmento entre <ul></ul> se duplican las filas/culumnas. cada <ul> es un "grupo"
export default Cards2

