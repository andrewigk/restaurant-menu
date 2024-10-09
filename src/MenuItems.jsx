const MenuItems = ({ id, title, price, img, desc }) => {
  return (
    <div key={id} className="menu-item">
      <img src={img} alt={title} className="img"></img>
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <div className="item-price">${price}</div>
        </header>
        <div className="item-text">{desc}</div>
      </div>
    </div>
  )
}
export default MenuItems
