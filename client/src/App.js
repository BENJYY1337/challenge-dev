import React, { useState, useEffect } from "react";
import UserTable from "./tables/UserTable";
import Axios from "./service/usersService";
import AddUserForm from "./forms/AddUserForm";

export default function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    listUser();
  }, []);

  // refresh
  const refreshList = () => {
    listUser();
  };

  // READ
  const listUser = async () => {
    await Axios.getAll()
      .then(response => {
        setUsers(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  // CREATE
  const addUser = async (user) => {
    await Axios.create(user)
      .then(response => {
        setUsers(user)
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      <header>
        <h1>
          <img src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
          Les Argonautes
        </h1>
      </header>

      <main>
        <h2>Ajouter un(e) Argonaute</h2>
        <AddUserForm addUser={addUser} />
        <h2>Membres de l'équipage</h2>
        <UserTable users={users} />
      </main>

      <footer>
        <p>Réalisé par Jason en Anthestérion de l'an 515 avant JC</p>
      </footer>
    </div>
  );
}
