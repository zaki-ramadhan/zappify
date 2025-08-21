import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useLocation } from "react-router-dom";

// import SplashCursor from '@effects/SplashCursor';
// import Cursor from '@common/Cursor';

import {Home, Login, Register, NotFound, Pricing, FindPassion, Categories, Entertainment} from './pages/';
const AppWrapper = () => {
    const location = useLocation();
    // const inPricing = location.pathname === "/pricing";
    // const inCategories = location.pathname === "/categories";
    // const inFindPassion = location.pathname === "/find-passion";

    return (
        <>
            {/* <Cursor /> */}
            {/* kalo di halaman pricing, jgn menampilkan splash cursor */}
            {/* {!inPricing && !inCategories && !inFindPassion && <SplashCursor />} */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/find-passion" element={<FindPassion />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/entertainment" element={<Entertainment />} />
                <Route path="/pricing" element={<Pricing />} />
                {/* semua URL yang ngaco akan menampilkan 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
};

function App() {
    return (
        <BrowserRouter>
            <AppWrapper />
        </BrowserRouter>
    );
}

export default App;
