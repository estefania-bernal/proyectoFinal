import React from "react";
import '../Ecommerce.css';

export default function Header(props) {
    const {countCartItems} = props;
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light p-1 m-1">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bolder" href="#">Disney STORE</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class=" navbar" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mx-2 mb-lg-0 text-right">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#/Cart">
                                    
                                    Carrito { ' '}
                                    {countCartItems? (
                                        <button className="btn btn-danger">{countCartItems}</button>   
                                    ) : (
                                        ''
                                    )}
                                    
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#/contactanos">Contactanos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};