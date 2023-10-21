import "@/styles/globals.css";
import {
  ChakraBaseProvider,
  ChakraProvider,
  extendBaseTheme,
  extendTheme,
} from "@chakra-ui/react";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";

const chakraTheme = extendTheme({
  components: {},
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={chakraTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
