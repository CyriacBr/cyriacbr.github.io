import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";
import { useStoreState } from "../store/hooks";
import { StoreProvider } from "easy-peasy";
import store from "../store";
import { NextComponentType } from "next";

const Wrapper: React.FC<{
  Component: NextComponentType;
  pageProps: any;
}> = ({ Component, pageProps }) => {
  const darkMode = useStoreState(state => state.darkMode);

  const theme = {
    darkMode,
    colors: {
      title: darkMode ? "#fff" : "#454545",
      text: darkMode ? "#fff" : "#333",
      primary: "#0085ff",
      background: darkMode ? "rgb(23, 28, 40)" : "rgb(251,252,253)"
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StoreProvider store={store}>
        <Wrapper Component={Component} pageProps={pageProps} />
      </StoreProvider>
    );
  }
}
