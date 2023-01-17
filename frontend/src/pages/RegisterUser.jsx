import React, {useState} from 'react';
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';

const RegisterUser = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        userName: "",
        email: "",
        password: "",
        password2: "",
    });

    const {userName, email, password, password2} = userData;

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
        if(password !== password2){
            return toast.error("Passwords must match.");
        }
        console.log(userData);
        setUserData({
            userName: "",
            email: "",
            password: "",
            password2: "",
        });
        navigate("/");
    }
    return (
        <>
            <h2 className='text-center'>Please Register.</h2>
            <p className='text-center'>We want you to be able to contribute!</p>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className=" col-sm-11 col-md-6 col-4-lg col-2-xl">
                        <form onSubmit={onSubmit}>  
                            <div className="form-group mb-3">
                                <label htmlFor="userName">User name</label>
                                <input required onChange={onChange} value={userName} type="text" className="form-control" id="userName" aria-describedby="userName" placeholder="Enter User name" />
                                <small id="userName" className="form-text text-muted">Be unique. You're one of a kind!.</small>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="email">Email address</label>
                                <input required onChange={onChange} value={email} type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password">Password</label>
                                <input required onChange={onChange} value={password} type="text" className="form-control" id="password" placeholder="Password"/>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="password2">Verify Password</label>
                                <input required onChange={onChange} value={password2} type="text" className="form-control" id="password2" placeholder="Re-Type Password"/>
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

export default RegisterUser;
