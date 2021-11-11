import { Button, Col, Row, Space } from 'antd'
import ticketApi from 'api/ticket'
import React, { useEffect, useState } from 'react'

function FilterByIsDone({ onFilterChange }) {
  const [statisticList, setStatisticList] = useState([])

  useEffect(() => {
    ;(async () => {
      const data = await ticketApi.getStatistic()
      setStatisticList(data)
    })()
  }, [])

  const handleClick = (value) => {
    if (onFilterChange)
      onFilterChange({
        status: value,
      })
  }

  return (
    <Row gutter={[16, 16]} style={{ marginBottom: 32 }}>
      <Col span={24}>Danh sách công việc</Col>
      {statisticList.map((statistic) => (
        <Col span={12} key={statistic.status}>
          <Button
            block
            size="middle"
            type={statistic.status === 3 ? 'primary' : ''}
            onClick={() => handleClick(statistic.status)}
          >
            <Space>
              <span>{statistic.name}</span>
              <span>({statistic.total})</span>
            </Space>
          </Button>
        </Col>
      ))}
    </Row>
  )
}

FilterByIsDone.propTypes = {}

export default FilterByIsDone
