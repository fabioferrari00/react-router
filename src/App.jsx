import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsListPage from "./pages/ProductsListPage";
import DefaultLayout from "./layouts/DefaultLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} ></Route>
          <Route path="/about-us" element={<AboutUsPage />} ></Route>
          <Route path="/products">
            <Route index element={<ProductsListPage />} ></Route>
          </Route>
        </Route>
      </Routes >
    </BrowserRouter >
  )
}

export default App
