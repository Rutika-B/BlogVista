import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import { Outlet } from "react-router-dom";
import { ThemeProvider } from "./context/theme";
import ThemeBtn from "./component/ThemeBtn";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const [ThemeMode, SetThemeMode] = useState("light");
  const lightTheme = () => {
    SetThemeMode("light");
  };
  const DarkTheme = () => {
    SetThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    document.querySelector("html").classList.add(ThemeMode);
  }, [ThemeMode]);

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap">
      <div className="w-full block">
        <ThemeProvider value={{ lightTheme, DarkTheme, ThemeMode }}>
          <Header />
          <main className={`w-full py-2 ${ThemeMode==='dark'? "dark:bg-black text-white":"bg-cyan-50"}`}>
            <Outlet />
          </main>
          <Footer />
        </ThemeProvider>
      </div>
    </div>
  ) : null;
}

export default App;
