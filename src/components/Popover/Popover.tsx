import { ComponentPropsWithoutRef, useState } from "react";
import { PopoverContext } from "./PopoverProvider";
import PopoverButton from "./PopoverButton";
import PopoverList from "./PopoverList";
import PopoverListItem from "./PopoverListItem";

interface PopoverComponentProps extends ComponentPropsWithoutRef<"div"> {}

const PopoverComponent = ({
  className,
  children,
  ...rest
}: PopoverComponentProps) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <PopoverContext.Provider value={{ open, handleOpen, handleClose }}>
      <div {...rest} className={`popover ${className || ""}`}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
};

const Popover = Object.assign(PopoverComponent, {
  Button: PopoverButton,
  List: PopoverList,
  ListItem: PopoverListItem,
});

export default Popover;
