import React,{useState} from 'react'

const Todo = () => {

    const [allTodos, setAllTodos] = useState([])

    const [formData, setFormData] = useState({
        title:"",
        description:"",
        status:""
    })
    const handleChange=(e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const onSubmitHandler=()=>{
        console.log(formData)
    }
    
  return (
    <>
    <div>Todo</div>

    <input type="text" onChange={(e)=>handleChange(e)}
    name="title"
    />
    <input type="text" onChange={(e)=>handleChange(e)}
    name="description"
    />
    <input type="text" onChange={(e)=>handleChange(e)}
    name="status"
    />

    <button onClick={onSubmitHandler}>Submit</button>
    </>
  )
}

export default Todo