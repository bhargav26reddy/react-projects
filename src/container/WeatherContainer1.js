
import Additionaldetails from "./Additionaldetails"
import { useState } from "react"
const WeatherContainer1 =(args)=>{
    const {current} = {...args}
    const {list} = {...current}
    const [datedata1, setdatedata1] = useState([])
    const filtered = [...new Set(list.map((data)=>data.dt_txt.toString().split(" ")[0]))]
    function fetchdata(args1){
         const datedata = list.filter((data)=>data.dt_txt.includes(args1))
         setdatedata1(datedata)
    }
    return(
        <div className="weathercontainer1">
            <div>
            {filtered.map((data)=>{
             return <button id={data} onClick={(e)=>{
                // console.log(e.target.id)
                fetchdata(e.target.id)
             }} style={{margin:"5px",borderRadius:"5px",height:"30px",width:"120px"}}>{data}</button>
            })}
            </div>
            <div style={{position:"relative", height:"300px",backgroundColor:""}}>
            <div className="additionaldetails" style={{height:"500px", width:"450px",position:"absolute",overflow:"scroll"}}>
                <table>
                    <tr style={{backgroundColor:"white", textAlign:"center"}}>
                        <th>Time</th>
                        <th>Conditions</th>
                        <th>Temp</th>
                        <th>Feels Like</th>
                        <th>Humditity</th>
                        <th>Wind</th>
                    </tr>
                 {datedata1.map((data)=><Additionaldetails datedata ={data}/>)}           
                 </table>
            </div>
            </div>
        </div>
    )
}
export default WeatherContainer1