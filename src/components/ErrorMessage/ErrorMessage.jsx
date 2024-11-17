import PropTypes from 'prop-types';
import styles from "./ErrorMessage.module.css";
const ErrorMessage = ({ message }) => {
  return <div className={styles.error}>Error: {message}</div>;
};

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired, // Validate that message is a required string
};

export default ErrorMessage;