import { connect } from 'react-redux';
import { deleteItem } from '../../actions';
import MenuPreview from '../../components/MenuPreview';
import { appGetMenuItems } from '../../selectors';

const makeMapStateToProps = () => {
  const mapStateToProps = (state, { items }) => {
    const getItems = appGetMenuItems(items);
    return {
      menuItems: getItems(state)
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = dispatch => {
  return {
    deleteItem(id) {
      dispatch(deleteItem(id));
    }
  };
};

export default connect(
  makeMapStateToProps,
  mapDispatchToProps
)(MenuPreview);
