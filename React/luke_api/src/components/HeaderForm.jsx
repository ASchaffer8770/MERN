import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

//form: input for state
const HeaderForm = () => {
  const [id, setId] = useState("")
  const [category, setCategory] = useState("")
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/${category}/${id}`)
    clearForm()
  }

  const clearForm = () => {
    setId("")
    setCategory("")
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        Search Galaxy: 
        <select name="category" value={category} onChange={e=>setCategory(e.target.value)}>
          <option hidden>Select Category</option>
          <option value="people">People</option>
          <option value="planets">Planets</option>
        </select>
        ID :
        <input type="text" name='id'value={id} onChange={e=>setId(e.target.value)}/>
        <button type='submit'> SEARCH </button>
      </form>

    </div>
  )
}

export default HeaderForm