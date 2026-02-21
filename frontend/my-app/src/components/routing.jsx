import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ListGame } from './listGame';
import { AddKategoty } from './addKategoty';
import { Listkategori } from './listkategori';
import { Registration } from './registration';
import { HomePage } from './homePage';
import { Login } from './login';
import { AddGame } from './addGame';
import { YourBag } from './yourBag';
import { Personal } from './personal';
import { MoreDetailsForGame } from './moreDetailsForGame';
import { CompPersonal } from './compPersonal';

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path="myListGame" element={<ListGame></ListGame>}></Route>
      <Route path="myAddGame" element={<AddGame></AddGame>}></Route>
      <Route path="myListKategory" element={<Listkategori></Listkategori>}></Route>
      <Route path="myAddKategory" element={<AddKategoty></AddKategoty>}></Route>
      <Route path="myRegistration" element={<Registration></Registration>}></Route>
      <Route path="mylogin" element={<Login></Login>}></Route>
      <Route path="myBag" element={<YourBag></YourBag>}></Route>
      <Route path="moreDetails" element={<MoreDetailsForGame></MoreDetailsForGame>}></Route>
      <Route path="myPersonal" element={<Personal></Personal>}></Route>
      <Route path="morePersonal/:date" element={<CompPersonal></CompPersonal>}></Route>
    </Routes>
  );
};
