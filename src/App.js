import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePageAdmin from "./components/pages/HomePageAdmin";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<HomePageAdmin />}></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
