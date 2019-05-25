import { Slide } from "@material-ui/core";

export function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

export function TransitionUp(props) {
  return <Slide {...props} direction="up" />;
}

export function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

export function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}
