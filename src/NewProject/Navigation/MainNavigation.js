import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderOne from "../Pages/HeaderOne";
import SignInPage from "../Pages/SignInPage";
import DisplayPage from "../Pages/DisplayPage";
import PageOne from "../Pages/SideBarPages/PageOne";
import PageTwo from "../Pages/SideBarPages/PageTwo";
import PageThree from "../Pages/SideBarPages/PageThree";
import PageFour from "../Pages/SideBarPages/PageFour";
import PageFive from "../Pages/SideBarPages/PageFive";

function MainNavigation() {
  const PATH_Name = [
    { path1: "/", element1: HeaderOne },
    {
      path1: "/signin",
      element1: SignInPage,
    },
    {
      path1: "/display",
      element1: DisplayPage,
    },
    {
      path1: "/First",
      element1: PageOne,
    },
    {
      path1: "/Second",
      element1: PageTwo,
    },
    {
      path1: "/Third",
      element1: PageThree,
    },
    {
      path1: "Fourth",
      element1: PageFour,
    },
    {
      path1: "Fifth",
      element1: PageFive,
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route exact path = "/" element={<HeaderOne />}></Route>
                <Route path="/signin" element={<SignInPage />}></Route>
                <Route path = "/display" element={<DisplayPage />}></Route>
                <Route path = "/First" element={<PageOne />}></Route>
                <Route path = "/Second" element={<PageTwo />}></Route>
                <Route path = "/Third" element={<PageThree/>}></Route>
                <Route path = "/Fourth" element={<PageFour />}></Route>
                <Route path = "/Fifth" element={<PageFive/>}></Route> */}

          {PATH_Name.map((result) => 
            <Route exact path={result.path1} element={<result.element1 />}></Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MainNavigation;
