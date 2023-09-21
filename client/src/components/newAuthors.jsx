import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewAuthors = () => {
    const navigate = useNavigate();
    const [name, setName] = useState(""); 
    const [errors, setErrors] = useState([]);

    const eventHandler = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/authors/new", {
                name,
            })
            .then((res) => {
                console.log(res.data);
                
                navigate(`/authors`);
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (let key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return (
        <>
            <form onSubmit={eventHandler}>
                {errors.map((item, index) => (
                    <p key={index}>{item}</p>
                ))}
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Name"
                />
                <button type="submit">Submit</button>
                <button type="submit"onClick={()=>navigate('/authors')}>Cancel</button>
            </form>
        </>
    );
};

export default NewAuthors;
