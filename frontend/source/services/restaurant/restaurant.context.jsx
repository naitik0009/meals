import React, { useState, createContext, useEffect, useMemo } from "react";

import { restaurantRequest,transform} from "./restaurant.service";

export const RestaurantContext = createContext();


//now thius provider is going to wrap every thing passed to it basicly our app.js
export const RestaurantContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState(null);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const retrieveRestaurants = () => {
        setLoading(true);
        setTimeout(() => {
            try {
                restaurantRequest().then(transform).then((data)=>(setRestaurants(data))) 
                setLoading(false);
                
            } catch (error) {
                setError(error);
            }
        }, 3000)
    };

    useEffect(()=>{
        retrieveRestaurants();
    },[])

    return (
        <RestaurantContext.Provider value={{ restro:restaurants,isLoading,error }}>{children}</RestaurantContext.Provider>
    )
};