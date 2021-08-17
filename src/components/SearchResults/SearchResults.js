import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';

class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array.isRequired,
    icon: settings.defaultColumnIcon,
    title: settings.search.searchResultText,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
    title: settings.search.searchResultText,
  }

  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon} /></span></h3>
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </section>
    );
  }
}

SearchResults.propTypes = {
  columnDescription: PropTypes.node,
};

export default SearchResults;
