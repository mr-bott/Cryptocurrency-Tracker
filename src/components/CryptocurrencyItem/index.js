// Write your JS code here
import './index.css'
const CryptocurrencyItem = props => {
  const {details} = props
  const {id, usdValue, euroValue, currencyLogo, currencyName} = details
  return (
    <li className="li">
      <div className="side-li">
        <img src={currencyLogo} alt={currencyName} className="img-li" />
        <p className="typee">{currencyName}</p>
      </div>
      <div className="sidee">
        <p className="typee">{usdValue}</p>
        <p className="typee">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
