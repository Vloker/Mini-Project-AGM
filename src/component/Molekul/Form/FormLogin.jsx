import React, {useState} from "react";
import { Button,Label,TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .email('email is not valid')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'email is not valid'),
  password: Yup.string()
    .min(8, 'password must be at least 8 characters')
})

const FormLogin = () => {

  const [login, setLogin] = useState(false)
  const navigate = useNavigate()

const onSubmit = (values) => {
  console.log(values);
}

const handleClik = () => {
  setLogin(!login)
  login ? navigate('/HomePage') : navigate('/Login')
  }

const formik = useFormik({
  initialValues: {
    email: "",
    password: "",
  },
  validationSchema,
  onSubmit
})

    return (
        <>
            <div className="font-montserrat font-bold text-xl">
                <p>SIGN IN</p>
            </div>

        <form onSubmit={formik.handleSubmit} className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="email"
                value="Email"
              />
            </div>
            <TextInput
              id=""
              placeholder="Email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              type="email"
            />
            <span className="text-red text-xs">{formik.touched.email && formik.errors.email ? formik.errors.email : ''}</span>
          </div>

          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="password"
                value="Password"
              />
            </div>
            <TextInput
              id=""
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Password"
              type="password"
            />
            <span className="text-red text-xs">{formik.touched.password && formik.errors.password ? formik.errors.password : ''}</span>
          </div>

          <Button type="submit" className="bg-green" onClick={handleClik} >Login</Button>
        </form>

        <div className="mt-2 font-montserrat font-normal text-xs">
            <p>Don't have an account? 
                <a href="/Register" className="hover:underline ps-2 font-semibold text-green">Register</a>
            </p>
        </div>
        </>
      )
}
export default FormLogin