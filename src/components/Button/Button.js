import { Main } from "./Button-Styles";

export default function Button({ clickHandler, btnText, selected }) {
  return (
    <Main selected={selected} onClick={clickHandler}>
      {btnText}
    </Main>
  );
}
