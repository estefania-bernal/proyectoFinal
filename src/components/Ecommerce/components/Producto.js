import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default function Producto(props) {
    const { producto, onAdd } = props;
    return (
        <div className='col-4  position-relative'>
            <div className='col-8'>
                <div className='row'>
                    <img  className='imagen col-4 mb-4 position-relative ' src={producto.imagen} alt={producto.nombre}></img>
                    <h3>{producto.nombre}</h3>
                    <div className='precio'>${producto.precio}</div>
                    <div>
                        <button onClick={() => onAdd(producto)}  className='btn btn-info fs-6'>Agregar</button>
                    </div>
                </div>

            </div>
        </div>
            )
}
