import Basket from './components/Basket';
import Header from './components/Header';
import Main from './components/Main';
import './Ecommerce.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import data from '../../data';
import { useState } from 'react';

function Ecommerce() {
    const { productos } = data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (producto) => {
        const exist = cartItems.find(x => x.id === producto.id);
        if(exist) {
            setCartItems(cartItems.map(x => x.id === producto.id ? {...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, {...producto, qty: 1}]);
        }
    };
    const onRemove = (producto) => {
        const exist = cartItems.find((x) => x.id === producto.id);
        if(exist.qty === 1) {
            setCartItems(cartItems.filter((x) => x.id !== producto.id));
        } else {
                setCartItems(cartItems.map(x => x.id === producto.id ? {...exist, qty: exist.qty - 1 } : x
                    )
                ); 
        }
    };
    return (
        <div className='Ecommerce'>
            <Header countCartItems={cartItems.length} />
            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                    <Basket
                    onAdd={onAdd}
                    onRemove={onRemove}
                    cartItems={cartItems}
                    />
                    </div>                    
                    <div className='col-8'>
                        <div className='row'>
                        <Main
                        onAdd={onAdd}
                        productos={productos}
                        />
                        </div>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Ecommerce;