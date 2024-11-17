import PropTypes from 'prop-types';
import "./ErrorMessage.module.css";
const ErrorMessage = ({ message }) => {
  return <div className='error'>Error: {message}</div>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired, // Validate that message is a required string
};

export default ErrorMessage;