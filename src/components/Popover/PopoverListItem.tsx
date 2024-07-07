import { ComponentPropsWithoutRef } from "react";
import { usePopoverContext } from "./PopoverProvider";

interface PopoverListItemProps extends ComponentPropsWithoutRef<"button"> {
  onClick: () => void;
}

const PopoverListItem = ({ children, ...rest }: PopoverListItemProps) => {
  const props = usePopoverContext();
  const handleClick = async () => {
    /* if (onClick) {
      await onClick();
    } */
    props.handleClose();
  };
  return (
    <button {...rest} className={"popover__item"} onClick={handleClick}>
      {children}
    </button>
  );
};

export default PopoverListItem;
