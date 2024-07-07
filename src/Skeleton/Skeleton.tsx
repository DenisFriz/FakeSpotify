import React from "react";

interface ISkeletonProps {
  width: number | string;
  height: number;
  marginBottom?: number;
  marginTop?: number;
  isCircle?: boolean;
  borderRadius?: number;
  bgColor?: string;
}

const Skeleton: React.FC<ISkeletonProps> = ({
  width,
  height,
  marginBottom,
  marginTop,
  isCircle,
  borderRadius,
  bgColor,
}) => {
  const styles = {
    width: typeof width === "number" ? `${width}px` : width,
    height: `${height}px`,
    marginBottom: `${marginBottom}px`,
    marginTop: `${marginTop}px`,
    borderRadius: isCircle
      ? "50%"
      : borderRadius && borderRadius > 0
      ? `${borderRadius}px`
      : "0",
    backgroundColor: bgColor,
  };
  return <div className="skeleton" style={styles}></div>;
};

export default Skeleton;
