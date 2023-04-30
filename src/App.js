import React, { useContext, useEffect } from "react";
import theme from "./theme.js";
import Movies from "./pages/Movies.js";
import Series from "./pages/Series.js";
import Home from "./pages/Home.js";
import LoginForm from "./pages/LoginForm.js";
import SignUpForm from "./pages/SignUpForm.js";
import SearchResults from "./pages/SearchResults.js";
import MyList from "./pages/MyList.js";
import Landing from "./pages/Landing.js";
import Profile from "./pages/Profile.js";
import Show from "./pages/Show.js";
import Contact from "./pages/Contact.js";
import PrivacyPolicy from "./pages/PrivacyPolicy.js";
import Terms from "./pages/Terms.js";
import { ThemeProvider } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AppbarContextProvider } from "./context/AppbarContext.js";
import { UserContext } from "./context/UserContext.js";
import { SearchContextProvider } from "./context/SearchContext.js";
import { destroySession } from "./services/UserService.js";

const App = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(UserContext);
  let user = localStorage.getItem("user");
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setIsUserLoggedIn(true);
      navigate("/home");
    } else {
      setIsUserLoggedIn(false);
      destroySession();
      navigate("/login");
    }
  }, [user]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <AppbarContextProvider>
          <SearchContextProvider>
            {isUserLoggedIn ? (
              <React.Fragment>
                <Routes>
                  <Route path="/home" element={<Home />} />
                  <Route path="/movies" element={<Movies />} />
                  <Route path="/series" element={<Series />} />
                  <Route path="/list" element={<MyList />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/:type/:id" element={<Show />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms" element={<Terms />} />
                </Routes>
              </React.Fragment>
            ) : (
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/signup" element={<SignUpForm />} />
              </Routes>
            )}
          </SearchContextProvider>
        </AppbarContextProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
