import { BrowserRouter, Routes, Route } from "react-router-dom"
import MoviesPage from "./pages/movies"
import MoviesDetailPage from "./pages/MoviesDetail"
import DefaultLayout from "./layouts/DefaultLayout"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<div>home</div>} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MoviesDetailPage />} />
          <Route path="contacts" element={<div>contatti</div>} />
          <Route path="about" element={<div>chi siamo</div>} />
          <Route path="*" element={<div>404</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
