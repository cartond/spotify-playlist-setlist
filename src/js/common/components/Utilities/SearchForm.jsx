import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import styles from './Utilities.css';


class SearchForm extends PureComponent {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    alert('Submitted: ' + this.props.searchInput.searchInput)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={styles.searchbox}>
        <label>
          <span>Name:</span>
          <input type="text" value={this.props.searchInput.searchInput} onChange={this.props.onChangeValue} placeholder="Artist" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default SearchForm;
