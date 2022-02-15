import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Filters from '../Filters/Filters';
import Cards from '../Cards/Cards';
import Pagination from '../Pagination/Pagination';
import Search from '../Search/Search';

function Peliculas() {

    let [pageNumber, setPageNumber] = useState(1);
    let [search, setSearch] = useState("")

    let [fetchedData, updateFechtedData] = useState([]);
    let { info, data } = fetchedData;

    let api = `https://api.disneyapi.dev/characters?page=${pageNumber}`;
    
    
    useEffect(()=>{
        (async function(){
            let data = await fetch(api).then(res=>res.json())
            updateFechtedData(data)
        })();
    },[api])
    
    return (
        <div className='Peliculas'>
            <h2 className='wlcm'>
            🏰Bienvenido🌠
                <hr></hr>
            </h2>

        <Search setSearch={setSearch}/>

            <div className='container'>
                <div className='row'>
                    <div className='col-3'>
                    <Filters />
                    </div>                    
                    <div className='col-8'>
                        <div className='row'>
                            <Cards data={data}/>
                        </div>
                    </div>
                </div>
            </div>  

            <Pagination
                info={info}
                pageNumber = { pageNumber }
                setPageNumber={setPageNumber}
            />
        </div>
        
    );
};

export default Peliculas