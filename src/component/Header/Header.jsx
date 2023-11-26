import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Container from "../container/Container";
import Logo from "../Logo";
import LogoutBtn from "./logoutBtn";
import ThemeBtn from "../ThemeBtn";
import useTheme from "../../context/theme";


function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];
  const {ThemeMode}=useTheme();
  return (
    <header className={`w-full shadow sticky z-50 top-0 py-2 ${ThemeMode==='dark'? "dark:bg-black dark:text-white dark:shadow-slate-50":"bg-cyan-50"}`}>
      <Container>
        <nav className="flex flex-wrap border-cyan-300 px-4 lg:px-6 py-2.5">
          <div className="mr-4">
            <Link to="/">
              <Logo />
            </Link>
          </div>
          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li
                  key={item.name}
                  onClick={() => {
                    navigate(item.slug);
                  }}
                  className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                >
                  {item.name}
                </li>
              ) : null
            )}
            {authStatus && (
              <li className="inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full">
                <LogoutBtn />
              </li>
            )}
            <li className="inline-bock px-6 py-2 duration-200 rounded-full">
              <ThemeBtn />
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
