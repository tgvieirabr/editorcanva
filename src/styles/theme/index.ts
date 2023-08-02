import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `"Inter", sans-serif`,
    body: `"Inter", sans-serif`,
  },
  semanticTokens: {
    colors: {
      primary: {
        default: '#6abe45',
      },
    },
  },
});

export default theme;
