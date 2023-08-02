import './index.css'

const VisitedCountryItem = props => {
  const {visitedCountryDetails, clickRemove} = props
  const {id, name, imageUrl} = visitedCountryDetails

  const onClickRemove = () => {
    clickRemove(id)
  }

  return (
    <>
      <li className="visited-list-item">
        <img src={imageUrl} alt="thumbnail" className="country-img" />
        <div className="name-and-btn-container">
          <p className="visited-country-name">{name} </p>
          <button className="remove-btn" type="button" onClick={onClickRemove}>
            Remove
          </button>
        </div>
      </li>
    </>
  )
}
export default VisitedCountryItem
