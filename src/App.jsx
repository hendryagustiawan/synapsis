import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastComponent } from "./components/ToastComponent";
import { Suspense, lazy } from "react";

const NotFound = lazy(() => import("./pages/NotFound"));
const Detail = lazy(() => import("./pages/Detail"));
const Navbar = lazy(() => import("./components/Navbar"));
const Home = lazy(() => import("./pages/Home"));
const User = lazy(() => import("./pages/User"));
const EditUser = lazy(() => import("./pages/EditUser"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/edit/:id" element={<EditUser />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Suspense>
        </Routes>
        <ToastComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
