import React, {useState} from 'react';
//import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
    });

    const {email, password} = userData;

    const onChange = (e) => {
        setUserData((prevState) => (
            {
                ...prevState,
                [e.target.id]: e.target.value,
            })
        );
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userData);
        setUserData({
            email: "",
            password: "",
        });
        navigate("/");
    }
    return (
        <>
            <h2 className='text-center'>Please Login.</h2>
            <p className='text-center'>We're so happy to see you agian!</p>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className=" col-sm-11 col-md-6 col-4-lg col-2-xl">
                        <form onSubmit={onSubmit}>  
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email address</label>
                                <input required onChange={onChange} value={email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input required onChange={onChange} value={password} type="text" className="form-control" id="password" placeholder="Password"/>
                            </div>
                            {/* <div class="form-check mb-3">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div> */}
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
