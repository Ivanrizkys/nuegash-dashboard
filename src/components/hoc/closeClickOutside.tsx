import {
  ComponentType,
  ForwardedRef,
  useEffect,
  useRef,
  useState,
} from "react";

export interface CloseClickOutsideProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  ref: ForwardedRef<any>;
}

function closeClickOutside<T extends CloseClickOutsideProps>(
  WrappedComponent: ComponentType<T>
) {
  const Component = (props: Omit<T, keyof CloseClickOutsideProps>) => {
    const [open, setOpen] = useState(false);

    const ref = useRef<any>();

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (ref.current) {
          if (!ref.current.contains(event.target)) {
            setOpen(false);
          }
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
    }, [ref]);

    return (
      <WrappedComponent
        {...(props as T)}
        open={open}
        setOpen={setOpen}
        ref={ref}
      />
    );
  };

  return Component;
}

export default closeClickOutside;
