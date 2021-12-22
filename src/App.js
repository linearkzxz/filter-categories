import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [categories, setCategories] = useState([])
  const [filteredCategories, setFilteredCategories] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      fetch('https://api.publicapis.org/categories')
        .then((res) => res.json())
        .then((response) => {
          setCategories(response)
          setFilteredCategories(response)
        })
    }
    fetchData()
  }, [])

  const onChangeSearch = (event) => {
    const filtered = categories.filter((item) => item.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredCategories(filtered)
  }

  return (
    <div className='App'>
      <input type='text' onChange={onChangeSearch} />
      {filteredCategories.map((item) => {
        return <p key={item}>{item}</p>
      })}
    </div>
  )
}

export default App
