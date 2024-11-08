import { forwardRef, useImperativeHandle, useRef } from "react";

const MyButton = forwardRef(function MyButton(props, ref) {
  const buttonRef = useRef();
  useImperativeHandle(ref, () => ({
    click: () => {
      buttonRef.current.click();
    },
    innerHTML: buttonRef.current.innerHTML,
  }));

  return (
    <div>
      <button
        ref={buttonRef}
        onClick={() => {
          console.log("button clicked");
          props.onClick();
        }}
      >
        Click here
      </button>
    </div>
  );
});

export default MyButton;
