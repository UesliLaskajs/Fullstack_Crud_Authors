import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateAuthors = () => {
    const { id } = useParams();
    const [authors, setAuthors] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/authors/${id}`)
            .then((res) => {
                setAuthors(res.data.name);
            })
            .catch((err) => {
                console.log("error", err);
            });
    }, [id]);

    const eventListener = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:8000/authors/${id}/new`, {
            name: authors // Use the 'authors' state variable here
        })
            .then(() => {
                
                navigate(`/authors`);
            })
            .catch((err) => {
                const errorResponse = err.response ? err.response.data.message : null;

                if (errorResponse) {
                    const errorArr = [];

                    if (typeof errorResponse === 'object') {
                        for (let key of Object.keys(errorResponse)) {
                            errorArr.push(errorResponse[key].message);
                        }
                    } else {
                        errorArr.push(errorResponse);
                    }

                    setError(errorArr);
                } else {
                    setError(['An unknown error occurred.']); // Handle unexpected errors
                }
            });
    }

    return (
        <>
            <form onSubmit={eventListener}>
                {
                    error.map((item, index) => (
                        <p key={index}>{item}</p>
                    ))
                }
                <input
                    type="text"
                    value={authors}
                    onChange={(e) => setAuthors(e.target.value)}
                    placeholder="Enter Name"
                />
                <button type="submit">Submit</button>
                <button type="button" onClick={() => navigate('/authors')}>Cancel</button>
            </form>
        </>
    )
}

export default UpdateAuthors;
