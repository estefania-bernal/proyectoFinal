import React from "react";
import '../Ecommerce.css';
import Producto from "./Producto";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default function Main(props) {
    const { productos, onAdd } = props;
    return (
        <main className="block col-2">
            <h2>😁PRODUCTOS😁</h2>
            <div className="row">
                {productos.map((producto) => (
                    <Producto key={producto.id} producto={producto} onAdd={onAdd}></Producto>
                ))};
            </div>
        </main>
    );
};