'use client';

import { Table } from 'flowbite-react';
import React, {useEffect, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, deleteUser, userSelector } from '../../redux/feature/Users';
import ModalList from "../Molekul/ModalTambahUser"
import { useNavigate } from 'react-router-dom';
import { BiSearch } from "react-icons/bi";

export default function TableAdmin() {

  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector(userSelector.selectAll);
  
  // menampilkan data
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // menghapus data
  const handleClick = (id) => {
    const isUserConfirmed = window.confirm('Apakah Anda yakin ingin menghapus pengguna ini?');
    if (isUserConfirmed) {
      dispatch(deleteUser(id));
    }else {
      alert('Dibatalkan');
    }
  }

  // Mencari Data
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  }

  // Menyaring data sesuai dengan kata kunci pencarian
  const filteredUsers = users.filter((user) =>
    user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <>
    <div className="relative mt-5 ">
        <div className="absolute inset-y-0 left-0 flex items-center px-3 ">
            <button>
              <BiSearch className="w-5 h-5" />
            </button> 
        </div>
            <input 
              type="text" 
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch} 
              className="py-3 pl-10 w-2/4 rounded-xl"/>
    </div>

    <div className="mt-5 mb-10 pe-5 gap-5 flex flex-col">
    <div>
      <ModalList />
    </div>

    <Table hoverable>
      <Table.Head>
        <Table.HeadCell>
          Id
        </Table.HeadCell>
        <Table.HeadCell>
          Username
        </Table.HeadCell>
        <Table.HeadCell>
          Email
        </Table.HeadCell>
        <Table.HeadCell>
          Phone
        </Table.HeadCell>
        <Table.HeadCell>
          Alamat
        </Table.HeadCell>
        <Table.HeadCell>
          Gender
        </Table.HeadCell>
        <Table.HeadCell>
          Kota
        </Table.HeadCell>
        <Table.HeadCell>
          <span className="sr-only">
            Action
          </span>
        </Table.HeadCell>
      </Table.Head>
      <Table.Body className="divide-y">
        {filteredUsers.map((user) => (
          <Table.Row 
          className="bg-white dark:border-gray-700 dark:bg-gray-800"
          key={user.id}
          >
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {user.id}
          </Table.Cell>
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            {user.username}
          </Table.Cell>
          <Table.Cell>
            {user.email}
          </Table.Cell>
          <Table.Cell>
            {user.phone}
          </Table.Cell>
          <Table.Cell>
            {user.address}
          </Table.Cell>
          <Table.Cell>
            {user.gender}
          </Table.Cell>
          <Table.Cell>
            Surabaya
          </Table.Cell>
          <Table.Cell className='flex items-center gap-5'>
            <button
              className="font-medium text-red hover:underline dark:text-cyan-500"
              onClick={() => handleClick(user.id)}
              >
              Hapus
            </button>
            <button
              className="font-medium text-green hover:underline dark:text-cyan-500"
              onClick={() => navigate(`/Update/${user.id}`)}
              >
              Edit
            </button>
          </Table.Cell>
        </Table.Row>
        ))}
      </Table.Body>
    </Table>
    </div>
        </>
  )
}


