import React, { PureComponent } from 'react';

import styles from './Display.css';

class ResultsList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ul className={styles.results_list}>
        { this.props.data.searchResults.artist ? (
              this.props.data.searchResults.artist.map((result) =>
                <li key={result.mbid}>{result.name} {result.disambiguation ? (' AKA: ' + result.disambiguation) : ('')}</li>
              )
          ) : (
            <li>'Not Today'</li>

          )
        }
      </ul>
    );
  }
}
export default ResultsList;
