import { useEffect, useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AuthorsList = () => {
    const [authors, setAuthors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:8000/authors/")
            .then((res) => {
                setAuthors(res.data);
            })
            .catch((err) => console.log("Error", err));
    }, []);

    const deleteAuthor = (authorId) => {
        axios.delete(`http://localhost:8000/authors/${authorId}/edit`)
            .then(() => {
                // Remove the deleted author from the state
                setAuthors((prevAuthors) => prevAuthors.filter((item) => item._id !== authorId));
            })
            .catch((err) => console.log("Error", err));
    };

    return (
        <>
            <Link to='/authors/new'>Add new author</Link>

            <p>We have quotes by :</p>

            {
                authors.map((item, index) => (
                    <div key={index}>
                        <h1>{item.name}</h1>
                        <button onClick={() => deleteAuthor(item._id)}>Delete</button>
                        <button onClick={() => navigate(`/authors/${item._id}/new`)}>Edit</button>
                    </div>
                ))
            }
        </>
    )
}

export default AuthorsList;
