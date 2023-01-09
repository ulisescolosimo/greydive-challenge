import axios from "axios";
import React, { useEffect, useState } from "react";
import Form from "../components/Form";
import { database } from "../firebaseConfig";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import PageLayout from "../components/layout/Layout";

const Home = () => {
  const [db, setDb] = useState([]);

  useEffect(() => {
    axios.get("db.json").then((response) => {
      setDb(response?.data?.items);
    });
  }, []);

  const addUser = async (values) => {
    await addDoc(collection(database, "users"), values)
  };

  return (
    <PageLayout>
      <Form db={db} addUser={addUser} />
    </PageLayout>
  );
};

export default Home;
