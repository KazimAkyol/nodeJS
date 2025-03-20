import React, { useEffect, useState } from "react";
import axios from "axios";
import BilgiList from "../components/BilgiList";
import AddBilgi from "../components/AddBilgi";
const Home = () => {
  const [tutorials, setTutorials] = useState([]);

  //   const url = "https://tutorial-api.fullstack.clarusway.com/tutorials/"; //* bu link canli'da,ulasilabilir.
  const url = "http://127.0.0.1:8000/todo/"; //* bu link canli'da degil, herkes tarafindan ulasilabilir olmasi icin deploy edilmesi lazim. Benim DB'im, server klasörünün icinde db.sqlite3'de.
  //* Sadece bu url eklenerek Backend ile Frontend arasinda baglanti kuruldu.

  //! GET (READ)
  const getBilgiler = async () => {
    const res = await axios.get(url);
    console.log(res.data);

    setTutorials(res.data.result);
  };

  useEffect(() => {
    getBilgiler();
  }, []);

  //! POST (create: database'e veri gönderme)

  const postBilgi = async (yeniVeri) => {
    await axios.post(url, yeniVeri);

    getBilgiler();
  };

  //! DELETE (database'den silme)

  const deleteBilgi = async (id) => {
    // console.log(id);

    await axios.delete(`${url}${id}/`);

    getBilgiler();
  };

  //! PUT (update işlemi)

  const putBilgi = async (yeniVeri) => {
    await axios.put(`${url}${yeniVeri.id}/`, yeniVeri);

    getBilgiler();
  };

  return (
    <>
      <AddBilgi postBilgi={postBilgi} />

      <BilgiList
        tutorials={tutorials}
        deleteBilgi={deleteBilgi}
        putBilgi={putBilgi}
      />
    </>
  );
};

export default Home;
