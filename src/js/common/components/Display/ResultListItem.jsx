import React, { PureComponent } from 'react';

import styles from './Display.css';

class ResultListItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li key={key}>{value}</li>
    );
  }
}
export default ResultListItem;
