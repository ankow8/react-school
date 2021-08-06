import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';
//import Creator from '../Creator/Creator.js';
//import {settings} from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';

class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
    icon: PropTypes.string.isRequired,
  }
  /*state = {
    cards: this.props.cards || [],
  }do usuniecia*/
  /*addCard(title){
    this.setState(state => (
      {
        cards: [
          ...state.cards,
          {
            key: state.cards.length ? state.cards[state.cards.length-1].key+1 : 0,
            title,
          },
        ],
      }
    ));
  }do usuniecia*/
  render() {
    const {title, icon, cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>{title}<span className={styles.icon}><Icon name={icon} /></span></h3>
        {/*}{this.state.cards.map(({key, ...cardProps}) => (
          <Card key={key} {...cardProps} />
        ))}*/}
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        {/*<Creator text={settings.columnCreatorText} action={title => this.addCard(title)}/>*/}
      </section>
    );
  }
}

Column.propTypes = {
  columnDescription: PropTypes.node,
};

export default Column;
