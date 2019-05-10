import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

// This is i18n and i10n
import { FormattedMessage } from 'react-intl'

import LazyLoading from '../../common/components/LazyLoading'
import { actions as exampleActions } from '../../redux/modules/example'
import SearchForm from '../../common/components/Utilities/SearchForm'
import { exampleSelector } from '../../redux/selectors/exampleSelector'

// This is lazy loading example
const LazyExample = LazyLoading(() => import('../../common/components/Example/Example'))
// const SearchInputBox = SearchForm(() => import('../../common/components/Utilities/SearchForm'))

class MainView extends Component {
  state = {
    searchInput: '',
  }

  handleSearchChangeValue = e => this.setState({searchInput: e.target.value});


  componentDidMount() {
    // this.setState({isLoading: false})
  }

  render() {
    const {
      searchInput
    } = this.state

    return (
      <Fragment>
        <SearchForm searchInput={{searchInput}} onChangeValue={this.handleSearchChangeValue} />
        <p>Go search for: <i>{searchInput ? searchInput : 'Nothing '}</i></p>
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
