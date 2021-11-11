import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'antd'

import './User.scss'

const columns = [
  {
    title: 'Tên sản phẩm',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: 'Giá',
    dataIndex: 'price',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: 'Hình ảnh',
    dataIndex: 'imageSrc',
    render: imageSrc => <img className="image" src={imageSrc} alt=""/>,
  },
  {
    title: 'Shoppe Link',
    dataIndex: 'shoppeLink',
  },
  {
    title: 'Kích hoạt',
    dataIndex: 'isActive',
    sorter: (a, b) => a.isActive - b.isActive,
  },
]

const data = [
  {
    id: '1',
    name: 'Sản phẩm 1',
    price: 32000,
    imageSrc:
      'https://chailochenchen-webapp.vercel.app/products/Chai-dep-vuong-330ml-6',
    linkShoppe: '',
    content: '<span>this is content of product</span>',
    isActive: true,
  },
  {
    id: '2',
    name: 'Sản phẩm 2',
    price: 42000,
    imageSrc:
      'https://chailochenchen-webapp.vercel.app/products/Chai-dep-ngang-nap-nhom-330ml-5',
    linkShoppe: '',
    content: '<span>this is content of product</span>',
    isActive: true,
  },
  {
    id: '3',
    name: 'Sản phẩm 3',
    price: 32000,
    imageSrc:
      'https://chailochenchen-webapp.vercel.app/static/media/10.82e1c115.jpg',
    linkShoppe: '',
    content: '<span>this is content of product</span>',
    isActive: false,
  },
  {
    id: '4',
    name: 'Sản phẩm 4',
    price: 32000,
    imageSrc:
      'https://chailochenchen-webapp.vercel.app/static/media/11.9d8a6e99.jpg',
    linkShoppe: '',
    content: '<span>this is content of product</span>',
    isActive: false,
  },
]

function User(props) {
  const handleChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra)
  }

  return <Table columns={columns} dataSource={data} onChange={handleChange} className="product-table" />
}

User.propTypes = {}

export default User
