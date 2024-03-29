import React from "react";
import PropTypes from "prop-types";

export default function Alert(props) {
  
  const capt = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    props.alert && <div
      className={`alert alert-${props.alert.type} alert-dismissible fade show`}
      role="alert"
    >
      <strong>{capt(props.alert.type)}</strong>: {props.alert.message}

    </div>
  );
}

Alert.propTypes = {
  alert: PropTypes.object,
};
