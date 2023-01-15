import React from "react";
import PropTypes from "prop-types";

const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    return (
        <button className="btn btn-primary" onClick={isAuth ? onLogOut : onLogin}>
            {!isAuth ? "Войти" : "Выйти"}
        </button>
    );
 };
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.bool
};

export default SimpleComponent;
