import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './WebImage.css'
import { AllImageWeb } from '../../API/APIUrl';
import CircularProgress from '@material-ui/core/CircularProgress';
function WebImage({urlValue}) {
    const [ imgUrl , setImgUrl] = useState(false);
    useEffect(()=>{
        async function fetchData(){
            try{
                if(urlValue !== ''){
                    setImgUrl(null)
                    const {data}= await axios.get(AllImageWeb(urlValue));
                    setImgUrl(data)
                    console.log(data);
                }
            }
            catch(err){
                console.log(err);
            }
            
            
        }
        window.scroll(0,0);
        fetchData();
    },[urlValue])

    if (imgUrl===null ){
        return <CircularProgress className="loading"/>
    }
    else{
        return (

            <div className='web-image'>
                <div className='image-container'>
                    {imgUrl&& imgUrl.map((url,key)=>{
                        
                        if(url!=='' && !!url){
                            return <img key={key} src={url} />
                        }
                    })}
                </div>
            </div>
        )
    }
}

export default WebImage
