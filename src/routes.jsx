import { Route, Routes } from "react-router-dom";

import Count from "./pages/Count.jsx";
import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";

export default (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/count" element={<Count />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);
