import { useEffect, useState } from "react";
import API_KEY from "../Utilis/constants";
import WeatherContainer from "./WeatherContainer";
import WeatherContainer1 from "./WeatherContainer1";
import { FaSearch } from "react-icons/fa";

const Body =()=>{
    const [input,setinput] = useState('Nandyal')
    const [searchinput, setsearchinput] = useState('Nandyal')
    const [status, setstatus] = useState(true)
    const [current, setcurrent] = useState()
    const [next, setnext] = useState()
    const [searchflag,setsearchflag] =useState(true)

    useEffect(()=>{
        const fetchdata = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${searchinput}&units=metric&appid=${API_KEY}`);
        const data = fetchdata.then((response)=>response.json()).then((data)=>setcurrent(data))
        const currentdata = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchinput}&units=metric&appid=${API_KEY}`)
        const cudata = currentdata.then((response)=>response.json()).then((data)=>setnext(data))
     },[searchinput])

    if(next?.cod == '404'){
       alert(`No Such results found for ${searchinput}, Please Try with valid city`)
    //   return <Body />
    }
    return(
        <div className="Bodycontainer" style={{width:"100vw", height:"85vh", backgroundColor:"rgba(9, 15, 121, 1)"}}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
           { searchflag && <div className="searchcontainer" style={{marginLeft:"700px" }}>
                <form onSubmit={(e)=>{
                     e.preventDefault()
                     setsearchinput(input)
                }}>
                    <div style={{position:"relative"}}>
                    <input placeholder="Search your city" value={input} onChange={(e)=>setinput(e.target.value)} style={{borderRadius:"10px",height:40,fontSize:25}}></input>
                    <button style={{backgroundColor:"rgba(9, 15, 121, 1)",border:"none"}}><FaSearch style={{fontSize:"20px",color:"blue",position:"absolute",top:"10px",right:"25px"}}/></button>
                    </div>
                    
                </form>
            </div>}
            <div>
              { !searchflag && <button style={{borderRadius:"10px",height:45}} onClick={()=>{setstatus(true)
                     setsearchflag(true)
                }}>Current Temperature</button>}
               {searchflag && <button style={{borderRadius:"10px",height:45}} onClick={()=>{
                    setstatus(false)
                    setsearchflag(false)}
                }>View More</button>}
            </div>
            </div>
            {status?<div className="weathercontainer" style={{borderRadius:"10px", margin:"30px",border: "1px solid black", height:"500px", width:"800px", marginLeft:"500px",boxShadow:"5px 5px 10px 5px"}}>
               <WeatherContainer next={next}/>
            </div>:<div className="weathercontainer1">
               <WeatherContainer1 current={current}/>
            </div> }
        </div>
    )
}
export default Body;