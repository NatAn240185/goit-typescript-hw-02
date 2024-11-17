import PropTypes from 'prop-types';
import "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onClick }) => {
  return <button className='load_btn' onClick={onClick}>Load more</button>;
};

LoadMoreBtn.propTypes = {
  onClick: PropTypes.func.isRequired, // Validate that onClick is a required function
};

export default LoadMoreBtn;