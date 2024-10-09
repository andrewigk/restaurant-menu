import Title from './Title.jsx'
import { useState } from 'react'
import data from './data.js'
import Menu from './Menu.jsx'
import Categories from './Categories.jsx'

const App = () => {
  const [items, setItems] = useState(data)

  const tempCategories = items.map((item) => item.category)
  const tempSet = new Set(tempCategories)
  const tempItems = ['all', ...tempSet]

  const [categories, setCategories] = useState(tempItems)

  const filterCategories = (category) => {
    if (category === 'all') {
      setItems(data)
      return
    } else {
      const filtered = data.filter((item) => item.category === category)
      setItems(filtered)
    }
  }

  return (
    <main>
      <article className="menu">
        <Title text="Our Menu"></Title>
        <Categories
          categories={categories}
          filterCategories={filterCategories}
        ></Categories>
        <Menu items={items}></Menu>
      </article>
    </main>
  )
}
export default App
