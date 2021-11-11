import { Badge, Button, Table, Tag } from 'antd'
import { formatDate, getPriority, getStatus } from 'components/helper/job'
import React from 'react'
import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
  },
  {
    title: 'Tiêu đề',
    dataIndex: 'title',
  },
  {
    title: 'Trạng thái',
    dataIndex: 'status',
    render: (status) => {
      const data = getStatus(status)
      return <Tag color={data.color}>{data.text}</Tag>
    },
  },
  {
    title: 'Mức độ ưu tiên',
    dataIndex: 'priority',
    render: (priority) => {
      const data = getPriority(priority)
      return <Tag color={data.color}>{data.text}</Tag>
    },
  },
  {
    title: 'Nhân viên chịu trách nhiệm',
    dataIndex: 'workers',
    render: (worker) => {
      return worker.map((item) => (
        <Badge color="green" text={item?.worker_info?.name} />
      ))
    },
  },
  {
    title: 'Người hỗ trợ',
    dataIndex: 'supporters',
    render: (supporter) => {
      return supporter.map((item) => (
        <Badge color="green" text={item?.supporter_info?.name} />
      ))
    },
  },
  {
    title: 'Người tạo',
    dataIndex: 'creator_info',
    render: (creator) => {
      return creator.name
    },
  },
  {
    title: 'Hạn công việc',
    dataIndex: 'deadline',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
    render: (deadline) => {
      return formatDate(deadline)
    },
  },
  {
    title: 'Ngày tạo',
    dataIndex: 'created_at',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.price - b.price,
    render: (created_at) => {
      return formatDate(created_at)
    },
  },
  {
    title: 'Hành động',
    dataIndex: 'id',
    render: (id) => (
      <Link to={`/jobs/${id}`}>
        <Button type="link" size="small">
          Xem
        </Button>
      </Link>
    ),
  },
]

function TicketList({ data, pagination, onPageChange }) {

  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        position: ['topRight', 'bottomRight'],
        pageSize: 10,
        ...pagination,
        onChange: onPageChange,
      }}
    />
  )
}

TicketList.propTypes = {}

export default TicketList
