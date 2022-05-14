import './Filter.scss';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/actions';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <label className="filter-label">
      Find contact by name
      <input
        className="filter-input"
        type="text"
        value={filter}
        onChange={e => {
          return dispatch(changeFilter(e.target.value));
        }}
      />
    </label>
  );
};
export default Filter;
