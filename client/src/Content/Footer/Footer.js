import React from "react";
import { ListItemIcon, Stack } from "@mui/material";
import {
  Copyright as CopyrightIcon,
  Telegram as TelegramIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from "@mui/icons-material";

export default function FooterContent() {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ color: "text.primary", paddingTop: "15px", fontSize: ".8rem" }}
      >
        <CopyrightIcon sx={{ mr: 0.3, fontSize: 14 }} />
        {process.env.REACT_APP_COPY_RIGHT_YEAR}{" "}
        {process.env.REACT_APP_COMPANY_NAME}
      </Stack>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        sx={{
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <ListItemIcon sx={{ color: "text.primary" }}>
          <TwitterIcon
            sx={{ cursor: "pointer", fontSize: "20px" }}
            onClick={() =>
              window.open(
                `https://twitter.com/${process.env.REACT_APP_TWITTER_ID}`,
                "_blank"
              )
            }
          />
          <TelegramIcon
            sx={{ cursor: "pointer", fontSize: "20px", mx: 2 }}
            onClick={() =>
              window.open(
                `https://t.me/${process.env.REACT_APP_TELEGRAM_ID}`,
                "_blank"
              )
            }
          />
          <LinkedInIcon
            sx={{ cursor: "pointer", fontSize: "20px" }}
            onClick={() =>
              window.open(
                `https://www.linkedin.com/${process.env.REACT_APP_LINKEDIN_ID}`,
                "_blank"
              )
            }
          />
        </ListItemIcon>
      </Stack>
    </>
  );
}
