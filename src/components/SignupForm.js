import { getRoles } from "@testing-library/dom";
import React, {useState} from "react";
function SignupForm () {
    const [ formData, setFormData] = useState ({
        name:"",
        email:"",
        password:"",
        role:""
    });
}