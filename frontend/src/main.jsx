import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ShootingStars } from "./components/ui/shooting-stars";
import { StarsBackground } from "./components/ui/stars-background";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import './index.css'
import HomePage from "./components/HomePage/HomePage.jsx";
import Webnatic from "./components/EventsPage/Webnatic";
import CodeBlast from "./components/EventsPage/CodeBlast";
import CompileIt from "./components/EventsPage/CompileIt";
import PuzzleVault from "./components/EventsPage/PuzzleVault";
import zIndex from "@mui/material/styles/zIndex.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<HomePage />} />
      <Route path="/webnatic" element={<Webnatic />} />
      <Route path="/codeblast" element={<CodeBlast />} />
      <Route path="/compile-it" element={<CompileIt />} />
      <Route path="/puzzle-vault" element={<PuzzleVault />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ShootingStars/>
    <StarsBackground/>
  </StrictMode>
);
