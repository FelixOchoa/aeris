import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import HomePageAdmin from "./pages/HomePageAdmin";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/*" element={<HomePageAdmin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
