import React, { ReactNode } from "react";

interface IRowProps {
  title: string;
  show_text?: string;
  children: ReactNode;
  classNames?: string;
}

const Row: React.FC<IRowProps> = ({
  title,
  show_text,
  children,
  classNames,
}) => {
  return (
    <div className="row">
      <div className="row__header">
        <div className="row__title">{title}</div>
        <div className="row__show">{show_text}</div>
      </div>
      <div className={`row__container ${classNames}`}>{children}</div>
    </div>
  );
};

export default Row;
