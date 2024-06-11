
import { useEffect, useState } from "react";
import Status from "./Status";
import { v4 as uuid } from "uuid";
const Main=()=>{
    const [inputtask, setinputtask] =useState()
    const [inputtask1, setinputtask1] =useState({status:''})
    const [formData, setFormData] = useState({id: "",title:"",satus:""});
   
const handleChange = (event) => {
    const { id, value } = event.target;

    setFormData((prevFormData) => ({ ...prevFormData, [id]: value }));
  };
    const [payload, setpayload] = useState({
        todo: [
            {
                id: 1,
                title: 'task1',
                status: 'todo'
            },
            {
                id: 2,
                title: 'task2',
                status: 'todo'
            }
        ],
        Inprogress: [
            {
                id: 3,
                title: 'task3',
                status: 'Inprogress'
            },
            {
                id: 4,
                title: 'task4',
                status: 'Inprogress'
            }
        ],
        Completed: [
            {
                id: 5,
                title: 'task5',
                status: 'Completed'
            },
            {
                id: 6,
                title: 'task6',
                status: 'Completed'
            }
        ]

    });
    console.log(formData,'form')
    console.log(payload,'payload')
    const status= Object.keys(payload)   
    console.log(inputtask1, 'inputtask1')
    const unique_id = uuid();
   
 
    // Get first 8 characters using slice
    const small_id = unique_id.slice(0, 8);
    return( 
        <div className="statuscontainer" style={{ display: "flex", flexDirection:"row", margin:"50px"}}>
            { status.map((status)=>{
                 return <Status payload={payload[status]} status={status} setFormData={setFormData}/> 
            })}
            <div style={{margin:"20px"}}>
            <form onSubmit={(e)=>{
                e.preventDefault();
                //    setinputtask1({
                //         id: small_id,
                //         title: formData.input,
                //         status: formData.select1 || 'todo',
                //     })
                    
                   
                    // setpayload((prevPayload)=>{if(inputtask1['status'] !=''){
                    //     return {
                    //      ...prevPayload,
                    //      todo: [...prevPayload.todo, inputtask1]
                    //    }
                    // }else{
                    //     return{...payload}
                    // }})


                    let fl = false
                    var index1
                     Object.values(payload).forEach((a)=>{
                        a.forEach((aa,index)=>{
                            console.log(aa)
                            if(aa.id == formData.id){
                                console.log(aa.id,'matched')
                               index1 = index
                                fl = true
                            }
                        })
                    })

                    console.log(index1,'index1')

                    const newTask = {
                        id: fl?formData.id:small_id, 
                        title: formData.input,
                        status: formData.select1 || 'todo'
                    };
                if(fl){
                    let aray = payload[formData.satus]
                    console.log('before slicing', aray)
                    console.log(index1, 'index')
                    if (index1 > -1) {
                        aray.splice(index1, 1); 
                      }
                    console.log('After slicing', aray)
                    aray = payload[newTask.status]
                    aray.push(newTask)
                    setpayload(prevPayload => ({
                        ...prevPayload,
                        [newTask['status']]: aray
                    }));
                    
                }else{
                    let aray = payload[newTask.status]
                    aray.push(newTask)
                    setpayload(prevPayload => ({
                        ...prevPayload,
                        [newTask['status']]: aray
                    }));
                }
                   setFormData({input:''})
                   
            }}> 
                <input placeholder="Task" id="input" onChange={handleChange} value={formData.input} style={{height:"30px", borderRadius:"5px"}}></input>
                <select id="select1" style={{height:"35px" }} onChange={handleChange}>
                    <option value="todo">TODO</option>
                    <option value="Inprogress">INPROGRESS</option>
                    <option value="Completed">COMPLETED</option>
        </select>
                <button style={{height:"35px", borderRadius:"5px"} }>Add</button>
                </form>
            </div>
        </div>
    )
}
export default Main;