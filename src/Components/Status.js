
import Cardconatiner from "./Cardconatiner"
const Status =(args)=>{
    const {payload, status, setFormData} = {...args}
    // console.log('status', payload, status)
    return(
<div className="statuscard" style={{padding:"10px",textAlign:"left", border:"2px solid black", margin:"20px",  width:"200px", backgroundColor:"grey", opacity:"0.5"}}>
        <div style={{fontWeight:"bold"}}>{status.toUpperCase()}</div> 
        <div className="cardcontainer">
            {payload.map((load)=>{
               return <Cardconatiner load={load} setFormData={setFormData}/>
            })}
        </div>
</div>
    )
}
export default Status;