import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Divider, Button, Space } from 'antd'
import './Filter.scss'
import FilterByIsDone from '../FilterByIsDone/FilterByIsDone'
import FilterByOthers from '../FilterByOthers/FilterByOthers'

function Filter({ onFilterChange, onSetNewFilters, filters }) {
  return (
    <Fragment>
      <FilterByIsDone onFilterChange={onFilterChange} />
      <FilterByOthers
        filters={filters}
        onFilterChange={onFilterChange}
        onSetNewFilters={onSetNewFilters}
      />
    </Fragment>
  )
}

Filter.propTypes = {}

export default Filter
