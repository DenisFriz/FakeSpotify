import React from "react";
import errorImg from "../../assets/images/error-img.png";
import { FallbackProps } from "react-error-boundary";

interface IErrorProps extends FallbackProps {
  colorText?: string;
}

const ErrorComponent: React.FC<IErrorProps> = ({
  error,
  resetErrorBoundary,
  colorText,
}) => {
  return (
    <div className="error">
      <img className="error__img" src={errorImg} alt="Error image" />
      <p className="error__title" style={{ color: colorText }}>
        {error.message}
      </p>
      <button className="error__button" onClick={resetErrorBoundary}>
        Go on main page
      </button>
    </div>
  );
};

export default ErrorComponent;
