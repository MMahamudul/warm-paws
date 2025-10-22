import React from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { useLoaderData, useParams } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';
import Items from '../component/Items';

const ServiceDetails = () => {
    const result = useLoaderData();
    const {id} =useParams();
    const [service, setService] = useState({});
    
    
    useEffect(()=>{
        const serviceDetails = result .find(item=>item.id == id);
        setService(serviceDetails)

    },[result,id ])
    /* const {image,description,serviceName, price, providerName, rating } = service; */
    return (
        <div>
            <Navbar></Navbar>
            <Items service={service}></Items>
            
            <Footer></Footer>
        </div>
    );
};

export default ServiceDetails;