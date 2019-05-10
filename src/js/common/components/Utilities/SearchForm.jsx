import React, { PureComponent } from 'react';

import styles from './Utilities.css';

class SearchForm extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} className={styles.searchbox}>
        <label>
          <span>Name:</span>
          <input 
            type="text"
            value={this.props.searchInput.searchInput}
            onChange={this.props.onChangeValue}
            placeholder="Artist" 
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
export default SearchForm;
