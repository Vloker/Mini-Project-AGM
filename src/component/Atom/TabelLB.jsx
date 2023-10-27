'use client';

import { Table } from 'flowbite-react';
import { useDispatch, useSelector } from 'react-redux'
import { getBooking, bookingSelector, deleteBooking } from '../../redux/feature/Listbooking';
import { useEffect } from 'react';

const TableListBooking = () => {

  const dispatch = useDispatch();
  const data = useSelector(bookingSelector.selectAll);

  // menampilkan Data
  useEffect(() => {
      dispatch(getBooking())
  }, [dispatch])

  // Menghapus Data
  const handleDelete = (id) => {
    const confirm = window.confirm('Apakah Anda yakin membatalkan booking?');
    if (confirm) {
      dispatch(deleteBooking(id));
    }else {
      alert('Dibatalkan');
    }
  }

    return (
      <Table hoverable >
        <Table.Head>
          <Table.HeadCell>
            No
          </Table.HeadCell>
          <Table.HeadCell>
            Jam Mulai
          </Table.HeadCell>
          <Table.HeadCell>
            Waktu bermain
          </Table.HeadCell>
          <Table.HeadCell>
            Tanggal Booking
          </Table.HeadCell>
          <Table.HeadCell>
            Lapangan
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">
              Action
            </span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y ">
        {data.map((item, index) => (
          <Table.Row
            key={item.id}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell>{index + 1}</Table.Cell>
            <Table.Cell>{item.jam}</Table.Cell>
            <Table.Cell>{item.waktu}</Table.Cell>
            <Table.Cell>{item.tanggal}</Table.Cell>
            <Table.Cell>{item.lapangan}</Table.Cell>
            <Table.Cell>
              <button
                className="font-medium text-green hover:underline"
                onClick={() => handleDelete(item.id)}
              >
                Batal
              </button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      </Table>
    )
}
export default TableListBooking


