import { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";

import ContentTv from "./Components/ContentTv";
import LinkMovie from "./Components/LinkMovie";
import Navbars from "./Components/Navbars";
import { LoginContext } from "./Contexts/LoginContext";
import AddEpisode from "./Pages/Admin/AddEpisode";
import AddFilm from "./Pages/Admin/AddFilm";
import DetailFilm from "./Pages/Admin/DetailFilm";
import DetailMovie from "./Pages/Admin/DetailMovie";
import DetailTvshow from "./Pages/Admin/DetailTvshow";
import DetailWatchome from "./Pages/Admin/DetailWatchome";
import EditAdmin from "./Pages/Admin/EditAdmin";
import HomeAdmin from "./Pages/Admin/HomeAdmin";
import ListFilm from "./Pages/Admin/ListFilm";
import ProfileAdmin from "./Pages/Admin/ProfileAdmin";
import EditProfile from "./Pages/EditProfile";
import Home from "./Pages/Home";
import Pay from "./Pages/Pay";
import Profile from "./Pages/Profile";
import "./styles/style.css";

// const PrivateRoute = () => {
//   const { isLogin } = useContext(LoginContext);
//   return isLogin ? <Outlet /> : <Navigate to="/" />;
// };
function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <Router>
        <Navbars />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/" element={<PrivateRoute />}> */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit-profile" element={<EditProfile />} />

          <Route path="/list-film" element={<ListFilm />} />
          <Route path="/home-admin" element={<HomeAdmin />} />
          <Route path="/detail-film/:id" element={<DetailFilm />} />
          <Route path="/detail-movie/:id" element={<DetailMovie />} />
          <Route path="/detail-tvshow/:id" element={<DetailTvshow />} />
          <Route path="/detail-watchome/:id" element={<DetailWatchome />} />

          <Route path="/add-episode" element={<AddEpisode />} />
          <Route path="/add-film" element={<AddFilm />} />

          <Route path="/profile-admin" element={<ProfileAdmin />} />
          <Route path="/edit-admin" element={<EditAdmin />} />
          <Route path="/movie" element={<LinkMovie />} />
          <Route path="/tvshow" element={<ContentTv />} />
          <Route path="/pay" element={<Pay />} />
          {/* </Route> */}
        </Routes>
      </Router>
    </LoginContext.Provider>
  );
}

export default App;
