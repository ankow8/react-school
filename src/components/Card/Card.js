import React from 'react';
import styles from './Card.scss';
import {listData} from '../../data/dataStore.js';
import PropTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div className={styles.component}>
        {this.props.title}
      </div>
    )
  }
}

export default Card;
