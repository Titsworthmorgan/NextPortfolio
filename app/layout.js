"use client";
import "./globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

export default function RootLayout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body className="bg-black">{children}</body>
      </html>
    </ThemeProvider>
  );
}
