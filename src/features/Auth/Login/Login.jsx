import React from 'react'
import PropTypes from 'prop-types'
import { Form, Input, Button, Checkbox, Space } from 'antd'

import { useDispatch } from 'react-redux'
import { login } from '../authSlice'
import { useHistory } from 'react-router'
import { unwrapResult } from '@reduxjs/toolkit'

function Login(props) {
  const dispatch = useDispatch()
  const history = useHistory()

  const onFinish = async (values) => {
    const result = await dispatch(login(values))
    unwrapResult(result)

    if (result?.type?.indexOf('fulfilled') !== -1) {
      history.push('/jobs')
    }
  }

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo)
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        style={{ padding: 32, backgroundColor: '#f5f5f5', borderRadius: 4 }}
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

Login.propTypes = {}

export default Login
