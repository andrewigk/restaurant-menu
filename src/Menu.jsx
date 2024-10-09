import MenuItems from './MenuItems.jsx'

const Menu = ({ items }) => {
  return (
    <section className="section-center">
      {items.map((item) => {
        return <MenuItems key={item.id} {...item}></MenuItems>
      })}
    </section>
  )
}
export default Menu
