import React , {useState} from 'react'
import './Form.css'

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
        <div key={inx}>
            <h3>{u.name}</h3>
            <p>{u.age}</p>
            <hr />
        </div>
    ))
  return (
    <>
    <h1>Form</h1>
    <form onSubmit={handleSubmit} action="">
        <input 
        value={name}
        onChange={(event) => setName(event.target.value)}
        type="text"
        placeholder='name'
        required />
           <input 
        value={age}
        onChange={(event) => setAge(event.target.value)}
        type="text"
        placeholder='age'
        required />
        <button>Submit</button>
    </form>
    <div className='mt'>{users}</div>
    </>
  )
}

export default Form