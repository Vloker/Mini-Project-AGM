import React from "react";
import { Button,Label,TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from 'react-redux';
import { addUser } from "../../../redux/feature/Users";
import { useNavigate, Link } from "react-router-dom";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(15, 'Username must be at most 20 characters'),
  email: Yup.string()
    .email('email is not valid')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'email is not valid'),
  password: Yup.string()
    .min(8, 'password must be at least 8 characters'),
  confirmPassword: Yup.string()
    .min(8, 'ConfirmPassword must be at least 8 characters')
    .oneOf([Yup.ref('password')], 'password must match')
})

const FormRegis = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    await dispatch(addUser(values))
    alert("Berhasil ditambahkan")
    navigate('/Login')
  }

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: ""
    },
    validationSchema,
    onSubmit
})

    return (
        <>
            <div className="font-montserrat font-bold text-xl text-center">
                <p>SIGN UP</p>
            </div>

        <form 
          className="flex max-w-md flex-col gap-4" 
          onSubmit={formik.handleSubmit}
          >
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="username"
                value="Username"
              />
            </div>
            <TextInput
              name="username"
              onChange={formik.handleChange}
              value={formik.values.username}
              placeholder="username"
              required
              shadow
              type="text"
            />
            <span 
              className="text-red text-xs">
              {formik.touched.username && formik.errors.username ? 
              formik.errors.username : ''}
            </span>
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                value="Email"
              />
            </div>
            <TextInput
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="email"
              required
              shadow
              type="email"
            />
            <span 
              className="text-red text-xs">
              {formik.touched.email && formik.errors.email ? 
              formik.errors.email : ''}
            </span>
          </div>

          <div>
            <div className="mb-2 block">
              <Label 
                htmlFor="password" 
                value="Password"/>
            </div>
            <TextInput
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="password"
              required
              shadow
              type="password"
            />
            <span 
              className="text-red text-xs">
              {formik.touched.password && formik.errors.password ? 
              formik.errors.password : ''}
            </span>
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="confirm-password"
                value="Confirm password"
              />
            </div>
            <TextInput
              name="confirmPassword"
              onChange={formik.handleChange}
              value={formik.values.confirmPassword}
              placeholder="confirm password"
              required
              shadow
              type="password"
            />
            <span 
              className="text-red text-xs">
              {formik.touched.confirmPassword && formik.errors.confirmPassword ? 
              formik.errors.confirmPassword : ''}
            </span>
          </div>

          <Button type="submit" className="bg-green">Created new account</Button>

        </form>

        <div className="mt-2 font-montserrat font-normal text-xs text-center">
            <p>Already have an account? 
                <Link 
                  to="/Login" 
                  className="hover:underline ps-2 font-semibold text-green">
                  Login
                </Link>
            </p>
        </div>
        </>
      )
}
export default FormRegis