import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// This is i18n and i10n
import { FormattedMessage } from 'react-intl'

import LazyLoading from '../../common/components/LazyLoading'
import { actions as exampleActions } from '../../redux/modules/example'
import SearchForm from '../../common/components/Utilities/SearchForm'
import ResultsList from '../../common/components/Display/ResultsList'
import { exampleSelector } from '../../redux/selectors/exampleSelector'
import axios from 'axios';

// This is lazy loading example
// const LazyExample = LazyLoading(() => import('../../common/components/Example/Example'))

class MainView extends Component {
  state = {
    searchInput: '',
    searchResults: {}
  }

  instance = axios.create({
    baseURL: 'https://api.setlist.fm/rest/1.0/search',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  handleSearchChangeValue = e => this.setState({searchInput: e.target.value});

  // Display in center screen when no results
  // Add loading animation
  // Add some other filters...date, venue, ..?
  handleSearchSubmit = e => {
    var self = this;
    event.preventDefault();

    // this.instance.get(`artists?p=1&sort=sortName&artistName=${this.state.searchInput}`)
    axios.get('data.json')
      .then(function (response) {
        const searchResults = response.data;
        debugger
        self.setState({ searchResults });
      });
      // iferror.......
  }

  componentDidMount() {
  }

  render() {
    const {
      searchInput,
      searchResults
    } = this.state

    return (
      <Fragment>
        <SearchForm searchInput={{searchInput}} onChangeValue={this.handleSearchChangeValue} onSubmit={this.handleSearchSubmit} />
        <p>Go search for: <i>{searchInput ? searchInput : 'Nothing '}</i></p>
        <ResultsList data={{searchResults}} />
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  example: exampleSelector(state),
})

const mapDispatchToProps = {
  ...exampleActions,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainView)
