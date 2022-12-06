import { ThemeProvider } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import "../styles/globals.css";
import { UserProvider } from "@auth0/nextjs-auth0";

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
     
        <Component {...pageProps} />
        
      </ThemeProvider>
    
  );
}

export default MyApp;
