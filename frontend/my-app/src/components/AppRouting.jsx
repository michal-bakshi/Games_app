import { Routes, Route } from 'react-router-dom';
import {
  HomePage,
  GameList,
  GameAdd,
  GameDetails,
  CategoryList,
  CategoryAdd,
  Registration,
  Login,
  Cart,
  Personal,
  PersonalOrder,
} from '../pages';

export function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="myListGame" element={<GameList />} />
      <Route path="myAddGame" element={<GameAdd />} />
      <Route path="myListKategory" element={<CategoryList />} />
      <Route path="myAddKategory" element={<CategoryAdd />} />
      <Route path="myRegistration" element={<Registration />} />
      <Route path="mylogin" element={<Login />} />
      <Route path="myBag" element={<Cart />} />
      <Route path="moreDetails" element={<GameDetails />} />
      <Route path="myPersonal" element={<Personal />} />
      <Route path="morePersonal/:date" element={<PersonalOrder />} />
    </Routes>
  );
}
