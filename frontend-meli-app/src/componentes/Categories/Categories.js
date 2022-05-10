import './Categories.scss'

function Categories ({ categories }) {
  return (
    <div className="Categories">
    {categories && categories.length === 1
      ? categories[0]
      : categories.join(' > ')
    }</div>
  )
}

export default Categories
