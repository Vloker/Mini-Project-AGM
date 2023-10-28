import React, {useEffect} from "react";
import { Button,Label,TextInput } from "flowbite-react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { userSelector,getUsers } from "../../../redux/feature/Users";

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters'),
  password: Yup.string()
    .min(8, 'password must be at least 8 characters')
})

const FormLogin = () => {

  const navigate = useNavigate()
  const users = useSelector(userSelector.selectAll)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUsers())
  },[dispatch])
  
  // Authentication Login
    const onSubmit = (values) => {

      const dummyUser = {
        username: "admin",
        password: "admin1234"
      }

      const userMatch = users.find(user => user.username === values.username && user.password === values.password)

      if(userMatch){
        localStorage.setItem('isLoggedIn', true)
        navigate('/HomePage')

      }else if(formik.values.username === dummyUser.username && formik.values.password === dummyUser.password){
        localStorage.setItem('isLoggedIn', true)
        navigate('/Usermanagement')
        
      }else{
        alert('Password atau username salah')
      }

    }

    const formik = useFormik({
      initialValues: {
        username: "",
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

              <Button type="submit" className="bg-green">Login</Button>

        </form>

              <div className="mt-2 font-montserrat font-normal text-xs text-center">
                  <p>Don't have an account? 
                      <a 
                        href="/Register" 
                        className="hover:underline ps-2 font-semibold text-green">
                        Register
                      </a>
                  </p>
              </div>
        </>
      )
}
export default FormLogin