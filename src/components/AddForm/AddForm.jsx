import React from 'react'
import PropTypes from 'prop-types'
import {
  Form,
  Select,
  InputNumber,
  Switch,
  Radio,
  Slider,
  Button,
  Upload,
  Rate,
  Checkbox,
  Row,
  Col,
  Input,
} from 'antd'
import { UploadOutlined, InboxOutlined } from '@ant-design/icons'

import './AddForm.scss'

function AddForm(props) {
  const onFinish = (values: any) => {
    console.log('Success:', values)
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  const normFile = (e) => {
    console.log('Upload event:', e)

    if (Array.isArray(e)) {
      return e
    }

    return e && e.fileList
  }
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      id="add-product-form"
    >
      <Form.Item
        label="Tên sản phẩm"
        name="name"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Giá sản phẩm"
        name="price"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <InputNumber min={0} />
      </Form.Item>

      <Form.Item
        label="Link shoppe"
        name="price"
        // rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="upload"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Upload name="imageSrc" listType="picture" maxCount={1} beforeUpload={() => false}>
          <Button icon={<UploadOutlined />}>Click to upload</Button>
        </Upload>
      </Form.Item>
    </Form>
  )
}

AddForm.propTypes = {}

export default AddForm
