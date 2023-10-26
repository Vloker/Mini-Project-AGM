'use client';

import { Table } from 'flowbite-react';
import { useSelector } from 'react-redux';

const TableListBooking = () => {

    const data = [
        {
          jam: '12:00',
          waktu: '1 jam',
          tanggal: '12/12/2023',
          lapangan: 'Court 1',
        }
    ]

const {jam, waktu, tanggal, lapangan} = useSelector(state => state.booking)
    
    return (
      <Table hoverable >
        <Table.Head>
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
            key={index}
            className="bg-white dark:border-gray-700 dark:bg-gray-800"
          >
            <Table.Cell>{item.jam}</Table.Cell>
            <Table.Cell>{item.waktu}</Table.Cell>
            <Table.Cell>{item.tanggal}</Table.Cell>
            <Table.Cell>{item.lapangan}</Table.Cell>
            <Table.Cell>
              <button
                className="font-medium text-green hover:underline"
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


