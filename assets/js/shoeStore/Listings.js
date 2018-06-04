import React, { Component} from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Brandon'
    }
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings() {

        var {listingsData} = this.props

        if(listingsData == undefined || listingsData.length == 0) {
          return "Sorry your filter did not match any litstings."
        }

        return listingsData.map((listing, index) => {
          if(this.props.globalState.view == 'box' ) {
            //This is the box view "Default"
            return (<div className="col span-1-of-3" key={index}>
              <div className="listing">
                <div className="listing-img" style={{background: `url("${listing.image}")
                no-repeat center center`}}>
                  <span className="title">{listing.title}</span>
                  <div className="details">
                  <div className="col-3">
                    <div className="logo-img"></div>
                    </div>
                    <div className="col-9">
                    <div className="game-details">
                      <span className="game-name">{listing.title}</span>
                      <span className="game-date">{listing.date}</span>
                    </div>
                    <div className="listing-details">
                      <div className="listing-system">
                      <span>{listing.system}</span>
                      </div>
                      <div className="listing-rating">
                      <span>{listing.rating}</span>
                      </div>
                      <div className="view-btn">
                        View Listing
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bottom-info">
                  <span className="bottom-price">${listing.price}</span>
                  <span className="bottom-location"><i className="fas fa-map-marker"></i>{listing.city}, {listing.state}</span>
                </div>
                </div>
              </div>)
          } else {
            //This is the long view
          return (<div className="col span-3-of-3" key={index}>
            <div className="listing">
              <div className="listing-img" style={{background: `url("${listing.image}")
              no-repeat center center`}}>
                <span className="title">{listing.title}</span>
                <div className="details">
                <div className="col-3">
                  <div className="logo-img"></div>
                  </div>
                  <div className="col-9">
                  <div className="game-details">
                    <span className="game-name">{listing.title}</span>
                    <span className="game-date">{listing.date}</span>
                  </div>
                  <div className="listing-details">
                    <div className="listing-system">
                    <span>{listing.system}</span>
                    </div>
                    <div className="listing-rating">
                    <span>{listing.rating}</span>
                    </div>
                    <div className="view-btn">
                      View Listing
                    </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bottom-info">
                <span className="bottom-price">${listing.price}</span>
                <span className="bottom-location"><i className="fas fa-map-marker"></i>{listing.city}, {listing.state}</span>
              </div>
              </div>
            </div>)
          }
        })
  }

  render () {
    return (<section id="listings">
      <section className="search-area">
        <input type="text" name="search" onChange={this.props.change} />
      </section>

      <section className="sortby-area">
      <div className="results">390 Results found</div>
      <div className="sort-options">
        <select name="sortby" className="sortby" onChange={this.props.change}>
          <option value="price-dsc">Lowest Price</option>
          <option value="price-asc">Highest Price</option>
        </select>

        <div className="view">
          <i className="fas fa-list-ul" onClick={this.props.changeView.bind(null, "long")}></i>
          <i className="fas fa-th" onClick={this.props.changeView.bind(null, "box")}></i>
        </div>

      </div>
      </section>

      <section className="listings-results">
          {this.loopListings()}
      </section>

      <section className="pagination">
        <div className="row">
        <ul className="page-nums">
          <li>Prev</li>
          <li className="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </ul>
        </div>
      </section>
  </section>)
  }
}
