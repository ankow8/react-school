import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';

class Column extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{this.props.columnDescription}</h3>
      </section>
    )
  }
}

Column.propTypes = {
  columnDescription: PropTypes.node,
}

export default Column;