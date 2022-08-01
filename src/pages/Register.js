import React from "react";
import "../assets/App.css";
import {Formik, Form , Field, ErrorMessage} from "formik";
import axios from "axios";
import * as Yup from 'yup';



function Register() {
    const initialValues = {
        username:"",
        password:"",
    };

    const validationsSchema = Yup.object().shape({
        username: Yup.string().required("Requiere usuario"),
        password: Yup.string().min(8).max(15).required(),
    });

    const onSubmit = (data) => {
            axios.post("http://localhost:3001/api/user/register", data).then((res) =>{
            console.log("Funciona");
        });
    };

    return (
      <div className="register">
        <Formik initialValues={initialValues} 
            onSubmit={onSubmit} 
            validationsSchema={validationsSchema}>
            
            <Form className = "formContainer">
                <label>Username</label>
                    <ErrorMessage name="username" element= "span" />
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
            </Form>
        </Formik>
      </div>
    )
}


export default Register;