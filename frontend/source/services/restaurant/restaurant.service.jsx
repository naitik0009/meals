import {mocks}  from "./mock";
const camelize= require("camelize");    





export const restaurantRequest = async(location="51.219448,4.402464")=>{
    return new Promise((resolve,reject)=>{
        const mock = mocks[location];
        if(!mock){reject("no location available");}
        resolve(mock);
    });
    };
    
export  const transform=(result)=>{
        const mapped = result.results.map((data)=>( {...data,isClosedTemporarily:data.business_status==="CLOSED_TEMPORARILY",isOpenNow:data.opening_hours&&data.opening_hours.open_now,}));
        return camelize(mapped);
    }
    
