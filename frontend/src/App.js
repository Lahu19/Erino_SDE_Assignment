import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBord from "./components/DashBord";
import CreateContacts from "./components/CreateContacts";
import ContactsList from "./components/ContactsList";
import EditContacts from "./components/EditContacts";


function App() {
  return (
  <div className="bg-neutral-300 h-auto w-screen h-screen">
    <a href="/" className="text-blue-500 font-bold text-2xl p-7 inline">Erino CRM</a>
    <BrowserRouter>
      <Routes>
        <Route element={<DashBord/>} path='/'/>
        <Route element={<CreateContacts/>} path='contacts'/>
        <Route element={<ContactsList/>} path="/contacts-list"/>
        <Route element={<EditContacts/>} path="/edit-contacts/:ID"/>
      </Routes>
      </BrowserRouter>
  </div>
  );
}

export default App;
