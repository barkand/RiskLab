import { AppBar, Toolbar } from "@mui/material";

import Logo from "../Toys/Logo";
import Title from "../Toys/Title";
import Gap from "../Toys/Gap";
import DarkModeBtn from "../../Theme/DarkModeBtn";

export default function AppBarComponent(props) {
  return (
    <AppBar
      elevation={props.elevation}
      position={props.position}
      sx={{
        textAlign: "center",
        height: "50px",
        backgroundColor: props.elevation === 0 ? "transparent" : "default",
      }}
      enableColorOnDark
    >
      <Toolbar variant="dense">
        <Logo />
        <Title />
        <Gap />
        <DarkModeBtn />
      </Toolbar>
    </AppBar>
  );
}
