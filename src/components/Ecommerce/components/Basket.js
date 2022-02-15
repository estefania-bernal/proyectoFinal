import React from "react";
import '../Ecommerce.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default function Basket(props) {
    const { cartItems, onAdd, onRemove } = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.precio * c.qty, 0);
    const taxPrice = itemsPrice * 0.08;
    const shippingPrice = itemsPrice > 200000 ? 0 : 15000;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
        <aside className="block1 col-4">
            <h2>🛍️Mi carrito🛍️</h2>
            <div>
                {cartItems.length === 0 && <div>El carrito está vacio</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="row">
                    <div className="nombre fw-bolder">{item.nombre}</div>
                    <div className="col-2">
                        <button onClick={() => onAdd(item)} className="add ">+</button>
                        <button onClick={() => onRemove(item)} className="remove">-</button>
                    </div>
                    <div className="precio">
                        {item.qty} x $ {item.precio}
                        <hr className="linea"></hr>
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <div className="row">
                        <div className="col-2 precio fw-bolder">Precio:</div>
                        <div className="col-1 precio text right">${itemsPrice}</div>
                    </div>
                    <div className="row">
                        <div className="col-2 precio fw-bolder">IVA:</div>
                        <div className="col-1 precio text right">${taxPrice}</div>
                    </div>
                    <div className="row">
                        <div className="col-2 precio fw-bolder">Precio envío:</div>
                        <div className="col-1 precio text right">${shippingPrice}</div>
                    </div>
                    <div className="row">
                        <div className="col-2 precio fw-bolder">Total:</div>
                        <div className="col-1 precio text right fw-bolder">${totalPrice}</div>
                    </div>
                    <hr/>
                    <div>
                        <button className="pagar" onClick={() => alert ('🎇Gracias por comprar en DISNEY STORE 😋😎')}>
                            Pagar
                        </button>
                    </div>
                </>
            )}
        </aside>
    );
};