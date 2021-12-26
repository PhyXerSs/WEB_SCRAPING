import React, { useEffect, useRef } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import './AppSearch.css'
import ScrollReveal from 'scrollreveal'
function AppSearch({setUrlValue}) {
    const inputRef = useRef();
    
    function ChangeURL(){
        setUrlValue(inputRef.current.value) ; 
    }
    const slideFromBottom = {
        distance: '200px',
        origin: 'bottom',
        opacity: '0',
        duration: 2000,
        reset:false,
    };
    useEffect(()=>{
        ScrollReveal().reveal('.app-search',slideFromBottom );
    },[])
    return (
        <div className='app-search'>
            <div className='input-container'>
                <input
                    ref={inputRef}
            
                    placeholder='Place URL'
                    onKeyPress={(e)=>{
                        if(e.key==='Enter'){
                            ChangeURL();
                        }
                    }}
                />
                <div className='search-button' onClick={ChangeURL}>
                    <SearchIcon style={{fontSize:'1.6rem',color:'white'}}/>
                </div>
                
            </div>
        </div>
    )
}

export default AppSearch
