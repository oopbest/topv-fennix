"use client";
import { createContext, useContext } from "react";
import Footer from "../footer";
import Header from "../header";

type Theme = {
  colors: {
    primary: string;
    secondary: string;
  };
};

const defaultTheme: Theme = {
  colors: {
    primary: "#007bff",
    secondary: "#6c757d",
  },
};

const ThemeContext = createContext<Theme>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
