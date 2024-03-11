import React from "react";
import { useState,useEffect } from "react";
import axios from "axios";

const API_KEY  = process.env.REACT_APP_GIPHY_API_KEY;

function useGif(tag){
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const [gif,setGif] = useState('')
    const [show , setShow] = useState('false')

    async function fetchData() {
        setShow(true)
        const output = await axios.get(tag ?  (tagUrl) :(randomUrl))
        const {data} = output
        const imageSourc = data.data.images.downsized_large.url;
        setGif(imageSourc) 
        setShow(false)
    }
    useEffect( () => {
        fetchData();
    },[])
    return {gif,show,fetchData};
}
export default useGif
