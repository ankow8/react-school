import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    headerImage: PropTypes.string,
    columnDescription: PropTypes.node,
    description: PropTypes.node,
    columns: PropTypes.array,
  }
  static defaultProps = {
    description: settings.defaultListDescription,
  }
  render() {
    return (
      <section className={styles.component}>
        <Hero titleText={this.props.title} headerImage={this.props.image} />
        <div className={styles.description}>
          {this.props.children}
        </div>
        <div className={styles.columns}>
          <Column columnDescription={'Animals'}></Column>
          <Column columnDescription={'Plants'}></Column>
          <Column columnDescription={'Minerals'}></Column>
        </div>
      </section>
    )
  }
}

export default List;
