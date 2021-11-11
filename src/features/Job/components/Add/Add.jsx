import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Form, Select } from 'antd'
import './Add.scss'
const { Option } = Select

function Add(props) {
  return (
    <Form name="validate_other" onFinish={null} className="form-add-job">
      <Form.Item name="priority" label="Nhân viên chịu trách nhiệm">
        <Select placeholder="Nhân viên chịu trách nhiệm" allowClear></Select>
      </Form.Item>
      <Form.Item name="priority" label="Nhãn công việc">
        <Select placeholder="Chọn nhãn công việc" allowClear></Select>
      </Form.Item>

      <Form.Item name="worker_ids" label="Tiêu đề công việc	">
        <Select
          placeholder="Nhập tiêu đề công việc"
          showSearch
          allowClear
          filterOption={() => true}
        ></Select>
      </Form.Item>

      <Form.Item name="support_ids" label="Khách hàng liên quan">
        <Select
          placeholder="Chọn khách hàng liên quan"
          allowClear
          mode="multiple"
          filterOption={() => true}
          showSearch
        ></Select>
      </Form.Item>

      <Form.Item name="support_ids" label="Đối thủ">
        <Select
          placeholder="Chọn đối thủ	"
          allowClear
          mode="multiple"
          filterOption={() => true}
          showSearch
        ></Select>
      </Form.Item>

      <Form.Item name="support_ids" label="Mức độ ưu tiên">
        <Select
          placeholder="Chọn mức độ ưu tiên"
          allowClear
          mode="multiple"
          filterOption={() => true}
          showSearch
        ></Select>
      </Form.Item>

      <Form.Item name="support_ids" label="Nhân viên hỗ trợ">
        <Select
          placeholder="Chọn nhân viên hỗ trợ"
          allowClear
          mode="multiple"
          filterOption={() => true}
          showSearch
        ></Select>
      </Form.Item>

      <Form.Item name="support_ids" label="Hình ảnh liên quan">
        <Select
          placeholder="Chọn thời gian hoàn thành"
          allowClear
          mode="multiple"
          filterOption={() => true}
          showSearch
        ></Select>
      </Form.Item>

      <Form.Item name="support_ids" label="Nội dung công việc">
        <Select
          placeholder="Chọn thời gian hoàn thành"
          allowClear
          mode="multiple"
          filterOption={() => true}
          showSearch
        ></Select>
      </Form.Item>


    </Form>
  )
}

Add.propTypes = {}

export default Add
