import './index.css'

const TabItem = props => {
  const {tabDetails, upDateOnStateMethod, isActive} = props
  const {displayText, tabId} = tabDetails
  const onChangeButton = () => {
    upDateOnStateMethod(tabId)
  }
  const onActiveClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${onActiveClassName}`}
        onClick={onChangeButton}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
