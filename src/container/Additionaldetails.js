import { WiHumidity } from "react-icons/wi"
import { WiThermometer } from "react-icons/wi";
import { WiStrongWind } from "react-icons/wi";
const Additionaldetails =(args)=>{
    const {datedata} = {...args}
    const {main,sys,wind,weather} = {...datedata}
    const wea = weather[0]
    return(
     <tr className="detailcard" style={{height:"100px", backgroundColor:"white", width:"100vw",margin:"10px",textAlign:"center"}}>
          <td>{datedata.dt_txt.split(' ')[1]}</td>
          <td>{wea.main}</td>
          <td>{main.temp}<span>°C</span></td>
          <td>{main.feels_like}<span>°C</span><WiThermometer /></td>
          <td>{main.humidity}<span>%</span><WiHumidity /></td>
          <td>{wind.speed}<span>m/s</span><WiStrongWind /></td>
     </tr>
    )
}
export default Additionaldetails