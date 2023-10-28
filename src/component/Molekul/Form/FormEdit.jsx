import React,{useState} from "react";
import { Button,Label,TextInput } from "flowbite-react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, updateUser, userSelector } from "../../../redux/feature/Users";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FormEdit = () => {

    const [username, setUsername] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const users = useSelector((state) => userSelector.selectById(state, id));

    // Mengambil Data
    useEffect(() => {
        dispatch(getUsers());
    },[dispatch]);

    // Menampilkan Data berdasarkan Id
    useEffect(() => {
        if(users){
            setUsername(users.username);
            setPhone(users.phone);
            setAddress(users.address);
            setCity(users.city);
        }
    },[users]);

    // Mengupdate (Edit) Data
    const handleUpdate = async (e) => {
        e.preventDefault();
        await dispatch(updateUser({
            id,
            username,
            phone,
            address,
            city
        }))
        alert("Berhasil diubah")
        navigate('/Usermanagement')
    }

    return (
        <>
        <div className="font-montserrat font-bold text-xl text-center">
            <p>Update User</p>
          </div>

        <form 
            className="flex max-w-md flex-col gap-4" 
            onSubmit={handleUpdate}>
          <div>
                <div className="mb-2 block">
                  <Label 
                    htmlFor="'username'" 
                    value="Username" />
                </div>
                  <TextInput 
                    name='username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                    type='text'
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
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
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
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type='text'
                    required />
              </div>             

              <div>
                <div className="mb-2 block">
                  <Label 
                    htmlFor="city" 
                    value="City" />
                </div>
                  <TextInput 
                    name='city'
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type='text'
                    required />
              </div>
              
          <Button type="submit" className="bg-green">Update</Button>

        </form>
        </>
    )
}
export default FormEdit