import { useEffect, useRef } from "react";
import MyButton from "./MyButton";

function Footer() {
  const buttonRef = useRef();

  useEffect(() => {
    buttonRef.current.click();
  }, []);

  return (
    <>
      <MyButton
        ref={buttonRef}
        onClick={() => {
          console.log("Hi from footer");
        }}
      />
    </>
  );
}

export default Footer;
