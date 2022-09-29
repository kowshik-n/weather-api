import React, { useEffect,useState } from 'react';
import '../styling/Home.scss'
import "./search.css";
import Header from './Header';
import Fetch from './Fetch';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchApi } from '../store/actions/weatherActions';
import { useSelector } from 'react-redux'
/* 
    This is just a sample introduction file.
    You can clear the code written in this file and start writing your own code.
*/

export default function Home(){
  const [search,setSearch]=useState("coimbatore");
  const city=search;
console.log(search)
  
    const key='b2623e558cf5d9ea0b9ef4d4d0cc67d7'
    // let [weathData,setWeathData]=useState('');
    // console.log("buddy",weathData)
    
    useEffect(() => {
      
    }, [])

///////////////////////////////////////////////////////////////

    const dispatch=useDispatch();

   


    async function getUser() {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b2623e558cf5d9ea0b9ef4d4d0cc67d7`);
          // console.log(response.data);
          dispatch(fetchApi(response.data))
        } catch (error) {
          console.error(error);
        }
      }


      useEffect(() => {
        getUser(); 
       setSearch(search)
      },[search])
      


      const weathData =useSelector((state)=> state.weather.payload);

    
    //displays background based on time of day
    const backgroundColor=
    
    () => {

      const date=new Date()

      let hours=date.getHours()
     let minutes=date.getMinutes()

      //return morning for time between 6Am to 5PM
      if(hours>=6 && hours<17){
        return 'morning '
      }
       //return morning for time between 5PM to 7:30pm
      else if((hours>=17 && hours<=18) || (hours==19 && minutes<=30)){
        return 'morning '
      }
      //return night from 7:30Pm to 6AM
      else
        return 'night '
    }

    //to set backgroung gif if its stormy or rainy
    const backgroundImage=() => {
      if(weathData && weathData.weather[0].main=='Rain'){
        return 'rain'
      }
      if(weathData && weathData.weather[0].main=='Stormy'){
        return 'stormy '
      }


    }

        return (
          <div className={'container ' + backgroundImage()}>
            <Header />
            {
               <div className='search'>
               <div className="search-container">
                       <input type="text" name="search" placeholder="Search..." className="search-input" onChange={(e)=> setSearch(e.target.value)}/>
                       <a href="#" className="search-btn">
                            <i className="fas fa-search"></i>      
                       </a>
                   </div>
                   </div>
            }
            {weathData &&
             <Fetch 
                data={weathData}/>}

            {console.log(weathData)}
          </div>
            
        )
    
}


