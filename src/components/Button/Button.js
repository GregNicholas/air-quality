import { Main } from "./Button-Styles";

export default function Button({ clickHandler, btnText }) {
  return <Main onClick={clickHandler}>{btnText}</Main>;
}
