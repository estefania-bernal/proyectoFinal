import React from 'react'
import estilos from './Cards.module.scss'



const Cards = ({data}) => {

    let display;
    console.log(data);

    if(data){
        display = data.map( x => {
            let { _id, name, imageUrl, films, tvShows, videoGames, parkAttractions } = x
            return( <div key={_id} className='col-4 mb-4 position-relative'>
                    <div className={estilos.cards}>
                        <img src={imageUrl} alt='' className={`${estilos.img} img-fluid`} />
                        <div style={{ padding: '2px'}} className='content'>
                            <div className='fw-bold text-center fs-6'>{name}</div>
                            <div className=''>
                                <div className={estilos.caracteristicas}><b>Películas:</b> {films}</div>
                                <div className={estilos.caracteristicas}><b>Series:</b> {tvShows}</div>
                                <div className={estilos.caracteristicas}><b>Juegos:</b> {videoGames}</div>
                                <div className={estilos.caracteristicas}><b>Parques:</b> {parkAttractions}</div>
                            </div>
                        </div>
                    </div>
                </div> )
    
        });
    } else {
      display =  "Este personaje todavía no existe en el maravilloso Mundo de Disney :'("         
    }

    return <>{display}</>;
};

export default Cards;