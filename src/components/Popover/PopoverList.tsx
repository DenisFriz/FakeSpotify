import { usePopoverContext } from "./PopoverProvider";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { ComponentPropsWithoutRef } from "react";

interface PopoverListProps extends ComponentPropsWithoutRef<"div"> {
  show?: boolean;
}

const PopoverList = ({ children, className, ...rest }: PopoverListProps) => {
  const props = usePopoverContext();
  const ref = useOnClickOutside(props.handleClose);
  if (!props.open) return null;

  return (
    <div {...rest} ref={ref} className={`popover__list ${className || ""}`}>
      {children}
    </div>
  );
};

export default PopoverList;
