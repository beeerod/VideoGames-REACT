import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import listingsData from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon',
      listingsData,
      system: 'All',
      genre: 'All',
      rating: 'All',
      min_price: 0,
      max_price: 300,
      min_year: 2010,
      max_year: 2018,
      multiplayer: false,
      cross_platform: false,
      free_extras: false,
      sortby: 'price-dsc',
      filteredData: listingsData,
      populateFormsData: '',
      search: '',
      view: 'box'
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForms = this.populateForms.bind(this)
    this.changeView = this.changeView.bind(this)
  }

  componentWillMount() {
    var listingsData = this.state.listingsData.sort((a, b) => {
      return a.price - b.price
    })

    this.setState({

    })
  }

  change(event) {
    var name = event.target.name
    var value = (event.target.type === 'checkbox') ? event.target.checked: event.target.value

    this.setState ({
      [name]: value
    }, () => {
      console.log(this.state)
      this.filteredData()
    })
  }

  changeView(viewName) {
    this.setState({
      view: viewName
    })
  }

  filteredData() {
    var newData = this.state.listingsData.filter((item) => {
      return item.price >= this.state.min_price && item.price <= this.state.max_price
      && item.year >= this.state.min_year && item.year <= this.state.max_year
    })

    if(this.state.system != "All") {
      newData = newData.filter((item) => {
        return item.system == this.state.system
      })
    }

    if(this.state.genre != "All") {
      newData = newData.filter((item) => {
        return item.genre == this.state.genre
      })
    }

    if(this.state.rating != "All") {
      newData = newData.filter((item) => {
        return item.rating == this.state.rating
      })
    }

    if(this.state.sortby == "price-dsc") {
      newData = newData.sort((a,b) => {
        return a.price - b.price
      })
    }

    if(this.state.sortby == "price-asc") {
      newData = newData.sort((a,b) => {
        return b.price - a.price
      })
    }

    if(this.state.search != '') {
      newData = newData.filter((item) => {
        var title = item.title.toLowerCase()
        var searchText = this.state.search.toLowerCase()
        var n = title.match(searchText)

        if(n != null) {
          return true
        }
      })
    }


    this.setState({
      filteredData: newData
    })

  }

  populateForms() {
    //System
    var systems = this.state.listingsData.map((item) => {
      return item.system
    })
    systems = new Set(systems)
    systems = [...systems]

    systems = systems.sort()

    //Genre
    var genres = this.state.listingsData.map((item) => {
      return item.genre
    })
    genres = new Set(genres)
    genres = [...genres]

    genres = genres.sort()

    //Rating
    var ratings = this.state.listingsData.map((item) => {
      return item.rating
    })
    ratings = new Set(ratings)
    ratings = [...ratings]

    ratings = ratings.sort()

    this.setState({
      populateFormsData: {
        systems,
        genres,
        ratings
      }
    }, () => {
      console.log(this.state)
    })

  }

  render () {
    return (<div>
        <Header/>
        <section id="content-area">
          <Filter change={this.change} globalState={this.state} populateAction={this.populateForms} />
          <Listings listingsData={this.state.filteredData} change={this.change} globalState={this.state}
          changeView={this.changeView} />
        </section>
       </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App />, app)
