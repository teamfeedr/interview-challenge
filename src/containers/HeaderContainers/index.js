import { connect } from 'react-redux';
import { appGetDietariesCount, appGetMenuItems } from '../../selectors';
import Header from '../../components/Header';

const makeMapStateToProps = () => {
  const mapStateToProps = (state, { items }) => {
    const getDietariesCount = appGetDietariesCount(items);
    const getItems = appGetMenuItems(items);

    return {
      menuItems: getItems(state),
      dietariesCount: getDietariesCount(state)
    };
  };
  return mapStateToProps;
};

export default connect(makeMapStateToProps)(Header);
