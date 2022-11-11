import { useState } from "react";
import { useEffect } from "react"


export function useSentenceCase (str){
    const [sentence,setsentence] = useState('');
    useEffect(()=>{
        var firstchar = str.charAt(0);
        var restchars = str.substring(1);
        var sentence = firstchar.toUpperCase() + restchars.toLowerCase();
        setsentence(sentence);
    },[])

    return sentence;
}