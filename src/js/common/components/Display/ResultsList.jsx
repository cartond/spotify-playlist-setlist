import React, { PureComponent } from 'react';

import styles from './Display.css';

class ResultsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.results_list}>
        {
          this.props.data.searchResults.map((result) =>
            <li key={result}>{result}</li>
          )
        }
      </ul>
    );
  }
}
export default ResultsList;
