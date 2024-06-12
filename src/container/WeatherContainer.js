import { WiDaySunnyOvercast } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { WiHumidity } from "react-icons/wi";
import { TbWorldLongitude } from "react-icons/tb";
const WeatherContainer =(args)=>{
      const {next} = {...args}
      const {main,name,sys,wind,coord} = {...next}
    return(
     <div style={{fontWeight:"bold", display:"flex"}}>
        <div className="leftside" style={{textAlign:"center",borderRadius:"10px", margin:"40px", border: "1px solid black", height:"400px", width:"300px",backgroundColor:"white"}}>
           <WiDaySunnyOvercast style={{fontSize:"140px", marginTop:"30px"}}/>
           <div style={{fontSize:"55px"}}>{main.temp}<span>°C</span></div>
           <div style={{fontSize:"25px"}}>{name}</div>
           <div style={{display:"flex"}}>
            <div>
           <div style={{textAlign:"left", margin:"20px"}}>
            <div style={{fontSize:"24px"}}>Country</div>
            <div style={{marginLeft:"29px",fontSize:"20px"}}>{sys.country}</div>
           </div>
           </div>
           <div>
           <div style={{textAlign:"left", marginTop:"22px",fontSize:"24px"}}>Max temp</div>
           <div style={{fontSize:"20px"}}>{main.temp_max}<span>°C</span></div>
           </div>
           </div>
        </div>
        <div className="rightside" style={{borderRadius:"10px", margin:"40px", border: "1px solid black", height:"400px", width:"400px",backgroundColor:"white"}}>
            <div style={{display:"flex"}}>
           <div className="humidity" style={{margin:"20px",paddingRight:"30px",borderRight:"1px solid black"}}> 
                <div style={{textAlign:"left", marginTop:"22px",fontSize:"24px"}}>Humditity</div>
                <div style={{marginLeft:"29px",fontSize:"20px"}}>{main.humidity}<span>%</span><WiHumidity /></div>
           </div>
           <div className="feels_like" style={{margin:"20px"}}> 
                <div style={{textAlign:"left", marginTop:"22px",fontSize:"24px"}}>Feels Like</div>
                <div style={{marginLeft:"29px",fontSize:"20px"}}>{main.feels_like}<span>°C</span><WiThermometer /></div>
           </div>
           </div>
           <hr/>
           <div style={{display:"flex"}}>
           <div className="windspeed" style={{margin:"20px",paddingRight:"10px",borderRight:"1px solid black"}}> 
                <div style={{textAlign:"left", marginTop:"22px",fontSize:"24px"}}>Wind Speed</div>
                <div style={{marginLeft:"29px",fontSize:"20px"}}>{wind.speed}<span>m/s</span><WiStrongWind /></div>
           </div>
           <div className="lon" style={{margin:"18px"}}> 
                <div style={{textAlign:"left", marginTop:"22px",fontSize:"24px"}}>Longitude</div>
                <div style={{marginLeft:"29px",fontSize:"20px"}}>{Math.round(coord.lon)}<TbWorldLongitude /></div>
           </div>
           </div>
           <hr/>
           <div className="lan" style={{margin:"20px"}}> 
                <div style={{textAlign:"left", marginTop:"22px",fontSize:"24px"}}>Lattitude</div>
                <div style={{marginLeft:"29px",fontSize:"20px"}}>{Math.round(coord.lat)}<TbWorldLongitude /></div>
           </div>
        </div>
     </div>
    )
}
export default WeatherContainer;