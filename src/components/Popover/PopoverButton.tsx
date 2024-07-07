import { ComponentPropsWithoutRef } from "react";
import { usePopoverContext } from "./PopoverProvider";

interface PopoverButtonProps extends ComponentPropsWithoutRef<"button"> {}

const PopoverButton = ({
  children,
  className,
  ...rest
}: PopoverButtonProps) => {
  const props = usePopoverContext();
  const handleClick = () => {
    props.handleOpen();
  };
  return (
    <button {...rest} className={className} onClick={handleClick}>
      {children}
    </button>
  );
};

export default PopoverButton;
