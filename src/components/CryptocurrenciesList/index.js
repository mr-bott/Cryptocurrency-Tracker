// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'
class CryptocurrenciesList extends Component {
  state = {isloading: true, currenciesList: []}

  componentDidMount() {
    this.getList()
  }

  getList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedList = data.map(each => ({
      id: each.id,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      currencyLogo: each.currency_logo,
      currencyName: each.currency_name,
    }))
    this.setState({currenciesList: updatedList, isloading: false})
  }

  render() {
    const {currenciesList, isloading} = this.state
    return  isloading ?  (
    <div data-testid="loader" className="list-container">
      <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
    </div>
  )
        
          :
      <div className="list-container">
        <h1 className="h1">CryptoCurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png "
          alt="cryptocurrency"
          className="main-img"
        />
        <ul className="ul">
          <li className="first-li">
            <p className="type">Coin type</p>
            <div className="side">
              <p className="currency">USD</p>
              <p className="currency">EURO</p>
            </div>
          </li>
          {currenciesList.map(each => (
            <CryptocurrencyItem details={each} key={each.id} />
          ))}
        </ul>
      </div>
      
    
  }
}

export default CryptocurrenciesList
