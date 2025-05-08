import type { Metadata } from "next";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider, mantineHtmlProps, createTheme } from '@mantine/core';
import { appTheme } from "./theme/theme";
import { RillaHeader } from "./components/layout/header/header";
import { RillaFooter } from "./components/layout/footer/footer";

export const metadata: Metadata = {
  title: 'My Mantine app',
  description: 'I have followed setup instructions carefully',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript defaultColorScheme="auto" />
      </head>
      <body>
        <MantineProvider theme={appTheme} defaultColorScheme="light"><RillaHeader/>{children}<RillaFooter/></MantineProvider>
      </body>
    </html>
  );
}
