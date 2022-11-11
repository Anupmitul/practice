import { useState } from "react";
import { useEffect } from "react";


export function useSorting (values,reverse){
    const [sorteddata,setsorteddata] = useState([])
    useEffect(()=>{
      if(reverse==true){
        values.sort();
        values.reverse();
        setsorteddata(values)
      } else {
        values.sort();
        setsorteddata(values)
      }
    },[values])

    for(var items of sorteddata){
        return items
    }
}