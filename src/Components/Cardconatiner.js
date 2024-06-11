const Cardconatiner =(args)=>{
    const {load,setFormData} ={...args}
    // console.log(load)
    const {id,title,status} = load
    return(
        <div className="card" style={{border:"2px solid black", backgroundColor:"white", margin:"10px", display:"flex", justifyContent:"space-between", color:"black"}}> 
            <div>{title}</div>
            <button onClick={(e)=>{
                setFormData({input:title,id:id,satus:status})
            console.log(e.target, title)}
            }>Edit</button>
        </div>
    )
}
export default Cardconatiner;