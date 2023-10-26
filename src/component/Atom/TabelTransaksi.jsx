'use client';

import { Table } from 'flowbite-react';
const TabelTransaksi = () => {

    const data = [
        {
          jam: '12:00',
          waktu: '1 jam',
          tanggal: '12/12/2023',
          lapangan: 'Court 1',
          total: 'Rp. 40.000'
        }
    ]

    return (
      <Table hoverable >
        <Table.Head>
          <Table.HeadCell>
            Jam
          </Table.HeadCell>
          <Table.HeadCell>
            Waktu
          </Table.HeadCell>
          <Table.HeadCell>
            Tanggal
          </Table.HeadCell>
          <Table.HeadCell>
            Lapangan
          </Table.HeadCell>
          <Table.HeadCell>
            Total
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
            <Table.Cell>{item.total}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
      </Table>
    )
}
export default TabelTransaksi


