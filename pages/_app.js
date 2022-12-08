import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import { AuthProvider } from "../utils/helper/auth";

const theme = createTheme({
  palette: {
    primary: {
      main: "#212529",
    },
    secondary: {
      main: "#2b8a3e",
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default MyApp;
