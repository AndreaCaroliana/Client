import React from "react";
import "../assets/App.css";
import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from 'yup';

function Register() {

    const initialValues = {
        username:"",
        password:"",
    };

    const validationsSchema = Yup.object().shape({
        username: Yup.string().required(),
        password: Yup.string().min(8).max(15).required(),
    });

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
      <div className="register">
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationsSchema={validationsSchema}>
            <form className = "formContainer">
                <label>Username</label>
                    <ErrorMessage name="username" element = "span" />
                <Field 
                    autoComplete="off"
                    id="inputRegister" 
                    name="username" 
                    type="text"
                    placeholder="Name" 
                />
                
                <label>Password</label>
                <ErrorMessage name="title" element = "span" />
                <Field 
                    autoComplete="off"
                    id="inputRegister" 
                    name="password" 
                    type="password"
                    placeholder="Password" 
                />

                <button type="submit" >Register</button>
            </form>
        </Formik>
      </div>
    )
}


export default Register;