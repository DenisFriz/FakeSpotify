import React from "react";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

interface CustomErrorBoundaryProps {
  colorText: string;
  children: React.ReactNode;
}

const CustomErrorBoundary: React.FC<CustomErrorBoundaryProps> = ({
  colorText,
  children,
}) => {
  return (
    <ErrorBoundary
      FallbackComponent={(props: FallbackProps) => (
        <ErrorComponent {...props} colorText={colorText} />
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default CustomErrorBoundary;
