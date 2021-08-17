import SearchResults from './SearchResults';
import {getCardsForSearchResults} from '../../redux/cardsRedux';
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
  const id = props.match.params.id;

  return {
    cards: getCardsForSearchResults(state, id),
  };
};

export default connect(mapStateToProps)(SearchResults);
