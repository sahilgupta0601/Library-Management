import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Booksection.css';

export default function Booksection() {
  const history = useNavigate();
  const [data, setData] = useState([]);

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:1000/delete/${id}`)
      .then((res) => res.data)
      .then(() => {
        setData((prevData) => prevData.filter((item) => item._id !== id));
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:1000/get');
        setData(response.data.response);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="one">
      {data.map((item, index) => (
        <div className="super" key={item._id}>
          <div className="mainn">
            <div className="innerr">
              <img className="innerimg" src={item.imgurl} alt={item.bookname} />
            </div>
            <div className="innerr">
              <span className="spann">Code: {item.book_code}</span>
            </div>
            <div className="innerr">
              <span className="spann">Name: {item.bookname}</span>
            </div>
            <div className="innerr">
              <span className="spann">Author: </span> {item.AuthorName}
            </div>
            <div className="innerr">
              <span className="spann">Publisher: </span>
              {item.PublisherName}
            </div>
            <div className="innerr">
              <span className="spann">Price: </span>
              {item.price}
            </div>
            <div className="buttons">
              <button className="bttn1" onClick={() => history(`/books/${item._id}`)}>
                Update
              </button>
              <button className="bttn2" onClick={() => deleteHandler(item._id)}>
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
