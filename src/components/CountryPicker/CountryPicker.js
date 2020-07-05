import React,{useState,useEffect} from 'react'
import {FormControl,NativeSelect} from '@material-ui/core'
import {fetchCountry} from '../../Api/Api'
import './CountryPicker.css'
function CountryPicker({handleChange}) {
    
    const [countries,setCountries] = useState([]);
    useEffect(()=>{
        const fetch = async () =>{
            const data  = await fetchCountry();
            setCountries( data);
            console.log(countries)    
        }
        fetch();
    },[])
    
    return (
        <div>
            <FormControl  className='formControl'>

                <NativeSelect defaultValue='' onChange={(e)=>handleChange(e.target.value)}>
                    <option value = '' >Global</option>
                    {countries.map(country=><option key={country} value={country}>{country}</option>)}
                    
                </NativeSelect>
            </FormControl>
            
            
        </div>
    )
}

export default CountryPicker
