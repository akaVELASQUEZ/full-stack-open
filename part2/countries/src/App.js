import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter.js'

const Result = ({countries, search, setSearch}) => {
    console.log(search)
    const searchResult = countries.filter((element) => element.name.common.toLowerCase().includes(search.toLowerCase()))
    console.log(searchResult)
    console.log(searchResult.length)
    if (searchResult.length < 10 && searchResult.length > 1) {
        console.log("1")
        return (
            <>
                {searchResult.map((country) => {
                    console.log(country)
                    return (
                        < div key={country.ccn3}>
                         {country.name.common}  
                         <button onClick={() => {
                            setSearch(country.name.common)
                         }}>Show</button>
                        </div>
                    )
                })}
            </>
        )
    } else if (searchResult.length > 10) {
        console.log("2")
        return (
            <p>Too Many Matches, specify another filter</p>
        )
    } else if (searchResult.length === 1) {
        console.log("3")
        console.log(searchResult[0].name.common)
        return (
            <>
                <h1>{searchResult[0].name.common}</h1>
                <br/>
                <p>capital: {searchResult[0].capital}</p>
                <p>area: {searchResult[0].area}</p>
                <br/>
                <h2>Languages</h2>
                <ul>
                    {Object.entries(searchResult[0].languages).map(item => {
                        console.log(item)
                        return (
                            <li>{item[1]}</li>
                        )
                    })}
                </ul>
                <br/>
                <img src={searchResult[0].flags.png} alt="flag"/>
            </>
        )
    }
}

const App = () => {
    const [countries, setCountries] = useState([])
    const [search, setSearch] = useState('')
    useEffect(() => {
        axios
          .get('https://restcountries.com/v3.1/all')
          .then(response => {
            console.log('promise fulfilled')
            setCountries(response.data)
          })
      }, [])



    const searchType = e => {      
        console.log(e.target.value)
        console.log(countries.filter(element => element.name.common.includes(search)))
        console.log(countries.filter(element => element.name.common.includes(search)).length)
        return (
            setSearch(e.target.value)
        )
    }

    return (
        <>
            <Filter search={search} handleSearch={searchType} />
            <Result countries={countries} search={search} setSearch={setSearch}/>
        </>
    )
}

export default App;
