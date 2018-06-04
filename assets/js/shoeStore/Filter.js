import React, { Component} from 'react'

export default class Filter extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon'
    }

    this.systems =  this.systems.bind(this)
    this.genres = this.genres.bind(this)
    this.ratings = this.ratings.bind(this)
  }

  componentWillMount() {
    this.props.populateAction()
  }

  systems() {
    if(this.props.globalState.populateFormsData.systems != undefined) {
      // var systems = this.props.globalState.populateFormsData.systems
      var { systems } = this.props.globalState.populateFormsData
      console.log(systems)

      return  systems.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  genres() {
    if(this.props.globalState.populateFormsData.genres != undefined) {
      // var systems = this.props.globalState.populateFormsData.systems
      var { genres } = this.props.globalState.populateFormsData
      console.log(genres)

      return  genres.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  ratings() {
    if(this.props.globalState.populateFormsData.ratings != undefined) {
      // var systems = this.props.globalState.populateFormsData.systems
      var { ratings } = this.props.globalState.populateFormsData
      console.log(ratings)

      return  ratings.map((item) => {
        return(
          <option key={item} value={item}>{item}</option>
        )
      })
    }
  }

  render () {
    return (<section id="filter">
    <div className="inside">
      <h4>Filter</h4>
      <label htmlFor="system" className="top-lbl">System</label>
    <select name="system" className="filters system" onChange={this.props.change}>
      <option value="All">All</option>
      {this.systems()}
    </select>
      <label htmlFor="genre" className="top-lbl">Genre</label>
    <select name="genre" className="filters genre" onChange={this.props.change}>
      <option value="All">All</option>
      {this.genres()}
    </select>
      <label htmlFor="rating" className="top-lbl">Rating</label>
    <select name="rating" className="filters rating" onChange={this.props.change}>
      <option value="All">All</option>
      {this.ratings()}
    </select>
    <div className="filters price">
      <span className="title">Price</span>
      <input type="text" name="min_price" className="min-price" onChange={this.props.change} value={this.props.globalState.min_price}/>
      <input type="text" name="max_price" className="max-price" onChange={this.props.change} value={this.props.globalState.max_price}/>
    </div>
    <div className="filters year">
      <span className="title">Year</span>
      <input type="text" name="min_year" className="min-year" onChange={this.props.change} value={this.props.globalState.min_year}/>
      <input type="text" name="max_year" className="max-year" onChange={this.props.change} value={this.props.globalState.max_year}/>
    </div>
    <div className="filters extras">
    <span className="title">Extras</span>
      <label htmlFor="extras">
      <span>Multiplayer</span>
      <input name="multiplayer" value="multiplayer" type="checkbox" onChange={this.props.change}/>
      </label>
      <label htmlFor="extras">
      <span>Cross-Platform</span>
      <input name="cross_platform" value="cross_platform" type="checkbox" onChange={this.props.change}/>
      </label>
      <label htmlFor="extras">
      <span>Free Extras</span>
      <input name="free_extras" value="free_extras" type="checkbox" onChange={this.props.change}/>
      </label>
    </div>
    </div>
  </section>)
  }
}
