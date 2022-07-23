import React from "react";

import Header from "./Header/Header";
import Main from "../../Content/Main";
import Footer from "./Footer/Footer";
import ScrollTopButton from "./Toys/ScrollTop";
import AlertBar from "./Toys/AlertBar";

export default function Layout() {
  return (
    <>
      <Header />
      <ScrollTopButton>
        <main
          style={{
            minHeight: "103vh",
            maxWidth: "1400px",
            marginTop: "40px",
            marginBottom: "150px",
            marginLeft: "auto",
            marginRight: "auto",
            paddingLeft: "20px",
            paddingRight: "20px",
          }}
        >
          <Main />
          <AlertBar />
        </main>
      </ScrollTopButton>
      <Footer />
    </>
  );
}
