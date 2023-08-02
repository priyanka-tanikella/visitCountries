import './index.css'

const VisitCountryItem = props => {
  const {countryDetails, clickVisit} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisit = () => {
    clickVisit(id)
  }

  return (
    <>
      <li className="list-item">
        <p className="name">{name} </p>
        {isVisited ? (
          <p className="visited-text">Visited</p>
        ) : (
          <button className="visit-btn" type="button" onClick={onClickVisit}>
            Visit
          </button>
        )}
      </li>
      <hr className="line" />
    </>
  )
}
export default VisitCountryItem
