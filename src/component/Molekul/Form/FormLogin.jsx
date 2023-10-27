import React, {useState} from "react";
import { Button,Label,TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters'),
  password: Yup.string()
    .min(8, 'password must be at least 8 characters')
})

const FormLogin = () => {

  const [login, setLogin] = useState(false)
  const navigate = useNavigate()
  

const handleClik = () => {
  
  const dummyUser = {
    username: "admin",
    password: "admin1234"
  }

  if(formik.values.username === dummyUser.username  && formik.values.password === dummyUser.password){
    setLogin(true)
    navigate('/Usermanagement')
  }else if(formik.values.username === 'user' && formik.values.password === 'user'){
    setLogin(true)
    navigate('/HomePage')
  }else{
    alert('login failed')
  }
}

const formik = useFormik({
  initialValues: {
    username: "",
    password: "",
  },
  validationSchema,
})

    return (
        <>
            <div className="font-montserrat font-bold text-xl">
                <p>SIGN IN</p>
            </div>

        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="username"
                value="Username"
              />
            </div>
            <TextInput
              placeholder="Username"
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              type="text"
            />
            <span 
              className="text-red text-xs">
                {formik.touched.username && formik.errors.username ? formik.errors.username : ''}
              </span>
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="Password"
              />
            </div>
            <TextInput
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
              type="password"
            />
            <span 
              className="text-red text-xs">
                {formik.touched.password && formik.errors.password ? formik.errors.password : ''}
            </span>
          </div>

          <Button type="submit" className="bg-green" onClick={handleClik} >Login</Button>
        </form>

        <div className="mt-2 font-montserrat font-normal text-xs text-center">
            <p>Don't have an account? 
                <a href="/Register" className="hover:underline ps-2 font-semibold text-green">Register</a>
            </p>
        </div>
        </>
      )
}
export default FormLogin