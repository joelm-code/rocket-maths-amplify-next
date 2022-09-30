import "../styles/globals.css";

import { ChakraProvider } from "@chakra-ui/react";

import Amplify from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsconfig from "../src/aws-exports";
import { studioTheme } from "../src/ui-components";
Amplify.configure({ ...awsconfig, ssr: true });

function MyApp({ Component, pageProps }) {
  return (
    <AmplifyProvider theme={studioTheme}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </AmplifyProvider>
  );
}

export default MyApp;
