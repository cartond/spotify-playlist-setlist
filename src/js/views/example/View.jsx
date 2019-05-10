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

// This is lazy loading example
const LazyExample = LazyLoading(() => import('../../common/components/Example/Example'))

class MainView extends Component {
  state = {
    searchInput: '',
    searchResults: []
  }

  handleSearchChangeValue = e => this.setState({searchInput: e.target.value});

  handleSearchSubmit = e => {
    event.preventDefault();
    this.setState({searchResults: this.state.searchResults.concat(this.state.searchInput)})
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
