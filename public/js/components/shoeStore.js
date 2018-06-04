webpackJsonp([0],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var listingsData = [{
  title: 'Mario Kart 8',
  date: '05/29/2014',
  year: '2014',
  city: 'Los Angeles',
  state: 'CA',
  rating: 'E',
  genre: 'Action',
  system: 'WiiU',
  price: '50',
  image: 'https://images-na.ssl-images-amazon.com/images/I/91M9TLtuEJL._SY445_.jpg',
  extras: ['multiplayer', 'crossplatform']
}, {
  title: 'Call of Duty Black Ops 3',
  date: '11/06/2015',
  year: '2015',
  city: 'San Diego',
  state: 'CA',
  rating: 'M',
  genre: 'Action',
  system: 'PS4',
  price: '40',
  image: 'https://images-na.ssl-images-amazon.com/images/I/81%2BkOR76lQL._SX342_.jpg',
  extras: ['multiplayer']
}, {
  title: 'Madden 18',
  date: '08/25/2017',
  year: '2017',
  city: 'Pheonix',
  state: 'AZ',
  rating: 'E',
  genre: 'Sports',
  system: 'Xbox',
  price: '60',
  image: 'https://i5.walmartimages.com/asr/1eec51f9-51bf-47bc-a5ee-883aabd60042_1.8b9a5d8c99e39d70fef14e40c5fc3dd5.jpeg?odnHeight=450&odnWidth=450&odnBg=FFFFFF',
  extras: ['multiplayer', 'free extras']
}, {
  title: 'NBA 2K18',
  date: '09/15/2017',
  year: '2017',
  city: 'Portland',
  state: 'OR',
  rating: 'E',
  genre: 'Sports',
  system: 'Xbox',
  price: '60',
  image: 'https://vignette.wikia.nocookie.net/crappy-games/images/8/82/NBA_2K18_cover_art.jpg/revision/latest?cb=20170923002500',
  extras: ['multiplayer', 'crossplatform', 'free extras']
}, {
  title: 'Injustice 2',
  date: '05/11/2017',
  year: '2017',
  city: 'Dallas',
  state: 'TX',
  rating: 'T',
  genre: 'Fighting',
  system: 'Xbox',
  price: '60',
  image: 'https://s1.thcdn.com/productimg/600/600/11324389-2104473918889152.jpg',
  extras: ['multiplayer', 'free extras']
}];

exports.default = listingsData;

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(33);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = __webpack_require__(98);

var _Header2 = _interopRequireDefault(_Header);

var _Filter = __webpack_require__(97);

var _Filter2 = _interopRequireDefault(_Filter);

var _Listings = __webpack_require__(99);

var _Listings2 = _interopRequireDefault(_Listings);

var _listingsData = __webpack_require__(100);

var _listingsData2 = _interopRequireDefault(_listingsData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      name: 'Brandon',
      listingsData: _listingsData2.default,
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
      filteredData: _listingsData2.default,
      populateFormsData: '',
      search: '',
      view: 'box'
    };
    _this.change = _this.change.bind(_this);
    _this.filteredData = _this.filteredData.bind(_this);
    _this.populateForms = _this.populateForms.bind(_this);
    _this.changeView = _this.changeView.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var listingsData = this.state.listingsData.sort(function (a, b) {
        return a.price - b.price;
      });

      this.setState({});
    }
  }, {
    key: 'change',
    value: function change(event) {
      var _this2 = this;

      var name = event.target.name;
      var value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;

      this.setState(_defineProperty({}, name, value), function () {
        console.log(_this2.state);
        _this2.filteredData();
      });
    }
  }, {
    key: 'changeView',
    value: function changeView(viewName) {
      this.setState({
        view: viewName
      });
    }
  }, {
    key: 'filteredData',
    value: function filteredData() {
      var _this3 = this;

      var newData = this.state.listingsData.filter(function (item) {
        return item.price >= _this3.state.min_price && item.price <= _this3.state.max_price && item.year >= _this3.state.min_year && item.year <= _this3.state.max_year;
      });

      if (this.state.system != "All") {
        newData = newData.filter(function (item) {
          return item.system == _this3.state.system;
        });
      }

      if (this.state.genre != "All") {
        newData = newData.filter(function (item) {
          return item.genre == _this3.state.genre;
        });
      }

      if (this.state.rating != "All") {
        newData = newData.filter(function (item) {
          return item.rating == _this3.state.rating;
        });
      }

      if (this.state.sortby == "price-dsc") {
        newData = newData.sort(function (a, b) {
          return a.price - b.price;
        });
      }

      if (this.state.sortby == "price-asc") {
        newData = newData.sort(function (a, b) {
          return b.price - a.price;
        });
      }

      if (this.state.search != '') {
        newData = newData.filter(function (item) {
          var title = item.title.toLowerCase();
          var searchText = _this3.state.search.toLowerCase();
          var n = title.match(searchText);

          if (n != null) {
            return true;
          }
        });
      }

      this.setState({
        filteredData: newData
      });
    }
  }, {
    key: 'populateForms',
    value: function populateForms() {
      var _this4 = this;

      //System
      var systems = this.state.listingsData.map(function (item) {
        return item.system;
      });
      systems = new Set(systems);
      systems = [].concat(_toConsumableArray(systems));

      systems = systems.sort();

      //Genre
      var genres = this.state.listingsData.map(function (item) {
        return item.genre;
      });
      genres = new Set(genres);
      genres = [].concat(_toConsumableArray(genres));

      genres = genres.sort();

      //Rating
      var ratings = this.state.listingsData.map(function (item) {
        return item.rating;
      });
      ratings = new Set(ratings);
      ratings = [].concat(_toConsumableArray(ratings));

      ratings = ratings.sort();

      this.setState({
        populateFormsData: {
          systems: systems,
          genres: genres,
          ratings: ratings
        }
      }, function () {
        console.log(_this4.state);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        _react2.default.createElement(
          'section',
          { id: 'content-area' },
          _react2.default.createElement(_Filter2.default, { change: this.change, globalState: this.state, populateAction: this.populateForms }),
          _react2.default.createElement(_Listings2.default, { listingsData: this.state.filteredData, change: this.change, globalState: this.state,
            changeView: this.changeView })
        )
      );
    }
  }]);

  return App;
}(_react.Component);

var app = document.getElementById('app');

_reactDom2.default.render(_react2.default.createElement(App, null), app);

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
  _inherits(Filter, _Component);

  function Filter() {
    _classCallCheck(this, Filter);

    var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this));

    _this.state = {
      name: 'Brandon'
    };

    _this.systems = _this.systems.bind(_this);
    _this.genres = _this.genres.bind(_this);
    _this.ratings = _this.ratings.bind(_this);
    return _this;
  }

  _createClass(Filter, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.populateAction();
    }
  }, {
    key: 'systems',
    value: function systems() {
      if (this.props.globalState.populateFormsData.systems != undefined) {
        // var systems = this.props.globalState.populateFormsData.systems
        var systems = this.props.globalState.populateFormsData.systems;

        console.log(systems);

        return systems.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'genres',
    value: function genres() {
      if (this.props.globalState.populateFormsData.genres != undefined) {
        // var systems = this.props.globalState.populateFormsData.systems
        var genres = this.props.globalState.populateFormsData.genres;

        console.log(genres);

        return genres.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'ratings',
    value: function ratings() {
      if (this.props.globalState.populateFormsData.ratings != undefined) {
        // var systems = this.props.globalState.populateFormsData.systems
        var ratings = this.props.globalState.populateFormsData.ratings;

        console.log(ratings);

        return ratings.map(function (item) {
          return _react2.default.createElement(
            'option',
            { key: item, value: item },
            item
          );
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'filter' },
        _react2.default.createElement(
          'div',
          { className: 'inside' },
          _react2.default.createElement(
            'h4',
            null,
            'Filter'
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'system', className: 'top-lbl' },
            'System'
          ),
          _react2.default.createElement(
            'select',
            { name: 'system', className: 'filters system', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.systems()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'genre', className: 'top-lbl' },
            'Genre'
          ),
          _react2.default.createElement(
            'select',
            { name: 'genre', className: 'filters genre', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.genres()
          ),
          _react2.default.createElement(
            'label',
            { htmlFor: 'rating', className: 'top-lbl' },
            'Rating'
          ),
          _react2.default.createElement(
            'select',
            { name: 'rating', className: 'filters rating', onChange: this.props.change },
            _react2.default.createElement(
              'option',
              { value: 'All' },
              'All'
            ),
            this.ratings()
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters price' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Price'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_price', className: 'min-price', onChange: this.props.change, value: this.props.globalState.min_price }),
            _react2.default.createElement('input', { type: 'text', name: 'max_price', className: 'max-price', onChange: this.props.change, value: this.props.globalState.max_price })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters year' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Year'
            ),
            _react2.default.createElement('input', { type: 'text', name: 'min_year', className: 'min-year', onChange: this.props.change, value: this.props.globalState.min_year }),
            _react2.default.createElement('input', { type: 'text', name: 'max_year', className: 'max-year', onChange: this.props.change, value: this.props.globalState.max_year })
          ),
          _react2.default.createElement(
            'div',
            { className: 'filters extras' },
            _react2.default.createElement(
              'span',
              { className: 'title' },
              'Extras'
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Multiplayer'
              ),
              _react2.default.createElement('input', { name: 'multiplayer', value: 'multiplayer', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Cross-Platform'
              ),
              _react2.default.createElement('input', { name: 'cross_platform', value: 'cross_platform', type: 'checkbox', onChange: this.props.change })
            ),
            _react2.default.createElement(
              'label',
              { htmlFor: 'extras' },
              _react2.default.createElement(
                'span',
                null,
                'Free Extras'
              ),
              _react2.default.createElement('input', { name: 'free_extras', value: 'free_extras', type: 'checkbox', onChange: this.props.change })
            )
          )
        )
      );
    }
  }]);

  return Filter;
}(_react.Component);

exports.default = Filter;

/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this));

    _this.state = {
      name: 'Brandon'
    };
    return _this;
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'header',
        null,
        _react2.default.createElement(
          'div',
          { className: 'logo' },
          'logo'
        ),
        _react2.default.createElement(
          'nav',
          null,
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Create Listing'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'About Us'
          ),
          _react2.default.createElement(
            'a',
            { href: '#' },
            'Log In'
          ),
          _react2.default.createElement(
            'a',
            { href: '#', className: 'register-btn' },
            'Register'
          )
        )
      );
    }
  }]);

  return Header;
}(_react.Component);

exports.default = Header;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Listings = function (_Component) {
  _inherits(Listings, _Component);

  function Listings() {
    _classCallCheck(this, Listings);

    var _this = _possibleConstructorReturn(this, (Listings.__proto__ || Object.getPrototypeOf(Listings)).call(this));

    _this.state = {
      name: 'Brandon'
    };
    _this.loopListings = _this.loopListings.bind(_this);
    return _this;
  }

  _createClass(Listings, [{
    key: 'loopListings',
    value: function loopListings() {
      var _this2 = this;

      var listingsData = this.props.listingsData;


      if (listingsData == undefined || listingsData.length == 0) {
        return "Sorry your filter did not match any litstings.";
      }

      return listingsData.map(function (listing, index) {
        if (_this2.props.globalState.view == 'box') {
          //This is the box view "Default"
          return _react2.default.createElement(
            'div',
            { className: 'col span-1-of-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '")\n                no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'title' },
                  listing.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-3' },
                    _react2.default.createElement('div', { className: 'logo-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'game-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'game-name' },
                        listing.title
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'game-date' },
                        listing.date
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-system' },
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.system
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-rating' },
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rating
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'view-btn' },
                        'View Listing'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'bottom-price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'bottom-location' },
                  _react2.default.createElement('i', { className: 'fas fa-map-marker' }),
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        } else {
          //This is the long view
          return _react2.default.createElement(
            'div',
            { className: 'col span-3-of-3', key: index },
            _react2.default.createElement(
              'div',
              { className: 'listing' },
              _react2.default.createElement(
                'div',
                { className: 'listing-img', style: { background: 'url("' + listing.image + '")\n              no-repeat center center' } },
                _react2.default.createElement(
                  'span',
                  { className: 'title' },
                  listing.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'details' },
                  _react2.default.createElement(
                    'div',
                    { className: 'col-3' },
                    _react2.default.createElement('div', { className: 'logo-img' })
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'col-9' },
                    _react2.default.createElement(
                      'div',
                      { className: 'game-details' },
                      _react2.default.createElement(
                        'span',
                        { className: 'game-name' },
                        listing.title
                      ),
                      _react2.default.createElement(
                        'span',
                        { className: 'game-date' },
                        listing.date
                      )
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'listing-details' },
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-system' },
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.system
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'listing-rating' },
                        _react2.default.createElement(
                          'span',
                          null,
                          listing.rating
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'view-btn' },
                        'View Listing'
                      )
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'bottom-info' },
                _react2.default.createElement(
                  'span',
                  { className: 'bottom-price' },
                  '$',
                  listing.price
                ),
                _react2.default.createElement(
                  'span',
                  { className: 'bottom-location' },
                  _react2.default.createElement('i', { className: 'fas fa-map-marker' }),
                  listing.city,
                  ', ',
                  listing.state
                )
              )
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'section',
        { id: 'listings' },
        _react2.default.createElement(
          'section',
          { className: 'search-area' },
          _react2.default.createElement('input', { type: 'text', name: 'search', onChange: this.props.change })
        ),
        _react2.default.createElement(
          'section',
          { className: 'sortby-area' },
          _react2.default.createElement(
            'div',
            { className: 'results' },
            '390 Results found'
          ),
          _react2.default.createElement(
            'div',
            { className: 'sort-options' },
            _react2.default.createElement(
              'select',
              { name: 'sortby', className: 'sortby', onChange: this.props.change },
              _react2.default.createElement(
                'option',
                { value: 'price-dsc' },
                'Lowest Price'
              ),
              _react2.default.createElement(
                'option',
                { value: 'price-asc' },
                'Highest Price'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'view' },
              _react2.default.createElement('i', { className: 'fas fa-list-ul', onClick: this.props.changeView.bind(null, "long") }),
              _react2.default.createElement('i', { className: 'fas fa-th', onClick: this.props.changeView.bind(null, "box") })
            )
          )
        ),
        _react2.default.createElement(
          'section',
          { className: 'listings-results' },
          this.loopListings()
        ),
        _react2.default.createElement(
          'section',
          { className: 'pagination' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'ul',
              { className: 'page-nums' },
              _react2.default.createElement(
                'li',
                null,
                'Prev'
              ),
              _react2.default.createElement(
                'li',
                { className: 'active' },
                '1'
              ),
              _react2.default.createElement(
                'li',
                null,
                '2'
              ),
              _react2.default.createElement(
                'li',
                null,
                '3'
              ),
              _react2.default.createElement(
                'li',
                null,
                '4'
              ),
              _react2.default.createElement(
                'li',
                null,
                '5'
              ),
              _react2.default.createElement(
                'li',
                null,
                'Next'
              )
            )
          )
        )
      );
    }
  }]);

  return Listings;
}(_react.Component);

exports.default = Listings;

/***/ })

},[102]);