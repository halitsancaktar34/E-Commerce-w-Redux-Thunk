import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "./pages/MainPage"
import BasketPage from "./pages/BasketPage"
import Header from "./components/Header"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/sepet" element={<BasketPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App