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
  <div className='flex flex-col gap-2 my-5'>
    <div className="w-2/3 flex items-center rounded-lg border border-gray-200 p-2">
        <div className="p-2">
              <BiSearch className="w-5 h-5" />
        </div>
            <input 
              type="text" 
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearch} 
              className='border-none resize-none outline-none p-2 w-full'
              />
    </div>

    <div className="flex flex-col gap-2">

    <div>
      <ModalList />
    </div>

    <div>
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
          <Table.Cell className="font-medium text-gray-900 dark:text-white">
            {user.id}
          </Table.Cell>
          <Table.Cell className="font-medium text-gray-900 dark:text-white">
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
    </div>
  </div>
        </>
  )
}


