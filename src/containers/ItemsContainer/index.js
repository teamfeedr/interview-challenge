import { connect } from 'react-redux';
import { addNewItem } from '../../actions';
import Items from '../../components/Items';
import { appGetItems } from '../../selectors';

const makeMapStateToProps = () => {
  const mapStateToProps = (state, { items }) => {
    const getItems = appGetItems(items);

    return {
      items: getItems(state)
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return {
    addNewItem(id) {
      dispatch(addNewItem(id));
    }
  };
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(Items);
