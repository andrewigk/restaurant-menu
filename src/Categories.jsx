const Categories = ({ categories, filterCategories }) => {
  return (
    <article className="btn-container">
      {categories.map((category, i) => {
        return (
          <button
            key={i}
            className="btn"
            onClick={() => {
              filterCategories(category)
            }}
          >
            {category}
          </button>
        )
      })}
    </article>
  )
}
export default Categories
