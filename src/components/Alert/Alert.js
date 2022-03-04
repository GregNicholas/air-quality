import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";

import { Main } from "./Alert-Styles";

export default function Alert({ message }) {
  const [show, setShow] = useState(true);
  const [display, setDisplay] = useState(true);

  useEffect(() => {
    const timeId = setTimeout(() => {
      setShow(false);
    }, 3000);
    const displayTimer = setTimeout(() => {
      setDisplay(false);
    }, 4000);

    return () => {
      clearTimeout(timeId);
      clearTimeout(displayTimer);
    };
  }, []);

  return (
    <Main show={show} disp={display}>
      <div>{`There is a problem fetching the post data - ${message}`}</div>
    </Main>
  );
}
