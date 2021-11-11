import { ClearOutlined } from '@ant-design/icons'
import { Col, DatePicker, Form, Row, Select, Card, Button } from 'antd'
import userApi from 'api/user'
import { priority, statusMain } from 'constants/job'
import React, { useEffect, useState } from 'react'
import _ from 'lodash'
import moment from 'moment'
const dateFormat = 'DD/MM/YYYY'

const initValueUserFilter = {
  get_full: true,
}

const { Option } = Select

function FilterByOthers({ onSetNewFilters, filters, onFilterChange }) {
  const [form] = Form.useForm()

  const [userList, setUserList] = useState([])
  const [userFilter, setUserFilter] = useState(initValueUserFilter)
  const [selectLoading, setSelectLoading] = useState(true)

  useEffect(() => {
    setSelectLoading(true)
    ;(async () => {
      const { data } = await userApi.getAll(userFilter)
      setUserList(data)
      setSelectLoading(false)
    })()
  }, [userFilter])

  useEffect(() => {
    const newFilter = {
      ...filters,
      created_from: filters.created_from && moment(filters.created_from),
      created_to: filters.created_to && moment(filters.created_to),
      deadline_from: filters.deadline_from && moment(filters.deadline_from),
      deadline_to: filters.deadline_to && moment(filters.deadline_to),
    }

    form.setFieldsValue(newFilter)
  }, [form, filters])

  const handleSearch = (value) => {
    if (value.length > 0) {
      setUserFilter({ name: value })
    } else {
      setUserFilter(initValueUserFilter)
    }
  }

  const handleSearchDebounce = _.debounce((value, functionDeboune) => {
    functionDeboune(value);
    }, 700);

  const handleFormValueChange = (value) => {
    onFilterChange(value)
  }

  return (
    <Card size="small" title="Bộ lọc" style={{ marginBottom: 32 }}>
      <Form
        form={form}
        name="validate_other"
        onFinish={null}
        onValuesChange={handleFormValueChange}
      >
        <Row gutter={[20, 0]}>
          <Col span={24} xxl={4} xl={6} lg={8} md={12} sm={24}>
            <Form.Item name="priority">
              <Select placeholder="Mức độ ưu tiên" allowClear>
                {priority.map((item) => (
                  <Option value={item.id}>{item.text}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24} xxl={4} xl={6} lg={8} md={12} sm={24}>
            <Form.Item name="worker_ids">
              <Select
                placeholder="Nhân viên chịu trách nhiệm"
                showSearch
                allowClear
                loading={selectLoading}
                onSearch={(value) => handleSearchDebounce(value, handleSearch)}
                filterOption={() => true}
              >
                {userList.map((user) => (
                  <Option value={user.id}>{user.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24} xxl={4} xl={6} lg={8} md={12} sm={24}>
            <Form.Item name="support_ids">
              <Select
                placeholder="Người hỗ trợ"
                allowClear
                mode="multiple"
                loading={selectLoading}
                onSearch={(value) => handleSearchDebounce(value, handleSearch)}
                filterOption={() => true}
                showSearch
              >
                {userList.map((user) => (
                  <Option value={user.id.toString()} key={user.id}>
                    {user.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24} xxl={4} xl={6} lg={8} md={12} sm={24}>
            <Form.Item name="status" initialValue={filters['status']}>
              <Select
                placeholder="Trạng thái"
                allowClear
                showSearch
                onSearch={(value) => handleSearchDebounce(value, handleSearch)}
              >
                {statusMain.map((item) => (
                  <Option value={item.id}>{item.text}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>

          <Col span={24} xxl={4} xl={6} lg={8} md={12} sm={24}>
            <Form.Item name="creator_id">
              <Select
                placeholder="Người tạo"
                allowClear
                showSearch
                onSearch={(value) => handleSearchDebounce(value, handleSearch)}
                loading={selectLoading}
              >
                {userList.map((user) => (
                  <Option value={user.id}>{user.name}</Option>
                ))}
              </Select>
            </Form.Item>
          </Col>
          <Col span={24} xxl={4} xl={6} lg={8} md={12} sm={24}>
            <Form.Item name="created_from">
              <DatePicker
                style={{ width: '100%' }}
                placeholder="Ngày tạo từ ngày"
                format={dateFormat}
                disabledDate={(current) => {
                  let customDate = form.getFieldValue('created_to')
                  if(!customDate) return false;
                  return current && current > customDate
                }}
              />
            </Form.Item>
          </Col>
          <Col span={24} xxl={4} xl={6} lg={8} md={12} sm={24}>
            <Form.Item name="created_to">
              <DatePicker
                style={{ width: '100%' }}
                placeholder="Ngày tạo đến ngày"
                format={dateFormat}
                disabledDate={(current) => {
                  let customDate = form.getFieldValue('created_from')
                  console.log({customDate})
                  if(!customDate) return false;
                  return current && current < customDate
                }}
              />
            </Form.Item>
          </Col>
          <Col span={24} xxl={4} xl={6} lg={8} md={12} sm={24}>
            <Form.Item name="deadline_from">
              <DatePicker
                style={{ width: '100%' }}
                placeholder="Hạn từ ngày"
                format={dateFormat}
                disabledDate={(current) => {
                  let customDate = form.getFieldValue('deadline_to')
                  if(!customDate) return false;
                  return current && current > customDate
                }}
              />
            </Form.Item>
          </Col>
          <Col span={24} xxl={4} xl={6} lg={8} md={12} sm={24}>
            <Form.Item name="deadline_to">
              <DatePicker
                style={{ width: '100%' }}
                placeholder="Hạn đến ngày"
                format={dateFormat}
                disabledDate={(current) => {
                  let customDate = form.getFieldValue('deadline_from')
                  if(!customDate) return false;
                  return current && current < customDate
                }}
              />
            </Form.Item>
          </Col>

          <Col span={24} style={{ textAlign: 'right' }}>
            <Button
              primary
              icon={<ClearOutlined />}
              onClick={() => onSetNewFilters({})}
            >
              Xóa bộ lọc
            </Button>
          </Col>
        </Row>
      </Form>
    </Card>
  )
}

FilterByOthers.propTypes = {}

export default FilterByOthers
