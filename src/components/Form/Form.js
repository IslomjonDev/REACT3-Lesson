import React , {useState} from 'react'
import './Form.css'
import { FaRegTrashAlt } from "react-icons/fa";

const Form = () => {
    const [name , setName] = useState("")
    const [age , setAge] = useState("")
    const [data , setData] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!name.trim()) return  alert("ismingizni kiriting")

            let user = {
                name , 
                age : +age
            }

    
        setData([...data , user])
        setName("")
        setAge("")

    }
    let users = data?.map((u , inx) => (
        <div className='users' key={inx}>

            <h3>{u.name}</h3>
            <button><FaRegTrashAlt className='trash' />
</button>
        </div>
    ))
  return (
    <>
    <form onSubmit={handleSubmit} action="">
        <input 
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder='name'
        required />
      
        <button>Submit</button>
    </form>
       <div className="mt">
        {users}
       </div>
    </>
  )
}

export default Form