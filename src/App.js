import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import HomePageAdmin from "./components/admin/HomePageAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/adminpage" element={<HomePageAdmin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
