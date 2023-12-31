'use client';

import { Button, Label, Modal, TextInput} from 'flowbite-react';
import { useState } from 'react';
import React from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/feature/Users';
import { useFormik } from 'formik';
import GenderRadio from '../Atom/GenderRadio';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string()
    .min(3, 'Username must be at least 3 characters')
    .max(15, 'Username must be at most 20 characters'),
  email: Yup.string()
    .email('email is not valid')
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'email is not valid'),
  password: Yup.string()
    .min(8, 'password must be at least 8 characters'),
  phone: Yup.string()
    .matches(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\.\/0-9]*$/g, 'phone is not valid'),
  address: Yup.string()
    .min(10, 'address must be at least 10 characters'),
})

const ModalList = () => {

    const dispatch = useDispatch()  
    const [openModal, setOpenModal] = useState({});
    const props = { openModal, setOpenModal};

    const onSubmit = (values) => {
      dispatch(addUser(values))
      alert("Berhasil ditambahkan")
    }

    const formik = useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
        phone: "",
        address: "",
        gender: "",
        city: ""
      },
      validationSchema,
      onSubmit
    })
  
    return (
      <div >
        <Button 
          onClick={() => props.setOpenModal('initial-focus')}
          className='bg-green font-montserrat'
          >
          Tambah user
        </Button>

        <Modal
          show={props.openModal === 'initial-focus'}
          size="md"
          popup
          onClose={() => props.setOpenModal(undefined)}
        >
          
          <Modal.Header />
          <Modal.Body>
            <form onSubmit={formik.handleSubmit}>
            <div className="space-y-6">
              <h3 className="text-xl font-bold font-montserrat text-gray">Tambah User</h3>

              <div>
                <div className="mb-2 block">
                  <Label 
                    htmlFor="'username'" 
                    value="Username" />
                </div>
                  <TextInput 
                    name='username'
                    onChange={formik.handleChange}
                    value={formik.values.username}
                    placeholder='Username'
                    type='text'
                    required />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label 
                    htmlFor="'email'" 
                    value="Email" />
                </div>
                  <TextInput 
                    name='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    placeholder='Email'
                    type='email'
                    required />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label 
                    htmlFor="password" 
                    value="Password"/>
                </div>
                  <TextInput 
                    name='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    placeholder='Password'
                    type="password" 
                    required />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label 
                    htmlFor="'phone'" 
                    value="Phone" />
                </div>
                  <TextInput 
                    name='phone'
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                    placeholder='+62'
                    type='text'
                    required />
              </div>

              <div>
                <div className="mb-2 block">
                  <Label 
                    htmlFor="address" 
                    value="Address" />
                </div>
                  <TextInput 
                    name='address' 
                    onChange={formik.handleChange}
                    value={formik.values.address}
                    type='text'
                    required />
              </div>
              
              <div>
                <div className="mb-2 block">
                    <Label 
                      htmlFor="gender" 
                      value="Gender" />
                  </div>
                  <div className='flex gap-5'>
                    <GenderRadio 
                      value='male' 
                      name='gender' 
                      checked={formik.values.gender === 'male'}
                      onChange={formik.handleChange}
                      title='Male'
                      />

                    <GenderRadio 
                      value='female' 
                      name='gender' 
                      checked={formik.values.gender === 'female'}
                      onChange={formik.handleChange}
                      title='Female'
                      />
                  </div>
              </div>

              <div>
                <div className="mb-2 block">
                  <Label 
                    htmlFor="city" 
                    value="City" />
                </div>
                  <TextInput 
                    name='city'
                    onChange={formik.handleChange}
                    value={formik.values.city}
                    type='text'
                    required />
              </div>
              
              <div className="w-full flex justify-end">
                <Button className='bg-green' type='submit'>Created User</Button>
              </div>
              
            </div>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    )
}
export default ModalList


