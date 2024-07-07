import { createContext, useContext } from "react";

interface PopoverContextProps {
  open: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}
export const PopoverContext = createContext<PopoverContextProps>(null!);

export const usePopoverContext = () => {
  const props = useContext(PopoverContext);
  if (!props) {
    throw new Error("No album context found!");
  }

  return props;
};
