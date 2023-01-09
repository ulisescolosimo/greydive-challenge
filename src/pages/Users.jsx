import React, { useEffect, useState } from "react";
import PageLayout from "../components/layout/Layout";
import "../index.css";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebaseConfig";
import UsersList from "../components/UsersList";


const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUsers = async () => {
    const querySnapshot = await getDocs(collection(database, "users"));
    const users = []
    querySnapshot.docs.forEach((doc) => {
        users.push({...doc.data(), id: doc.id})
    });
    setUsers(users);
  };

  useEffect(() => {
    getUsers().then(() => setLoading(false));
  }, []);

  return (
    <PageLayout>
      <UsersList users={users} loading={loading} />
    </PageLayout>
  );
};

export default Users;
