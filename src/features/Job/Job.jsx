import ticketApi from 'api/ticket'
import React, { useEffect, useState, useMemo } from 'react'
import Filter from './components/Filter/Filter'
import TicketList from './components/TicketList/TicketList'
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router'
import moment from 'moment';
import { PAGE, PER_PAGE } from 'constants/job'
import './Job.scss'

function Job(props) {
  const [ticketList, setTicketList] = useState([])
  const [loading, setLoading] = useState(true)
  const [total, setTotal] = useState(0)

  const history = useHistory()
  const location = useLocation()

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search)

    return {
      ...params,
      page: Number.parseInt(params.page) || PAGE,
      perPage: Number.parseInt(params.perPage) || PER_PAGE,

      status: Number.parseInt(params.status) || undefined,
      priority: Number.parseInt(params.priority) || undefined,

      support_ids: params.support_ids,
      worker_ids: Number.parseInt(params.worker_ids) || undefined,
      creator_id: Number.parseInt(params.creator_id) || undefined,

      created_from: params.created_from && moment(params.created_from),
      created_to: params.created_to && moment(params.created_to),
      deadline_from: params.deadline_from && moment(params.deadline_from),
      deadline_to: params.deadline_to && moment(params.deadline_to),
    }
  }, [location.search])

  useEffect(() => {
    try {
      ;(async () => {
        const { data, total } = await ticketApi.getAll(queryParams)
        setTicketList(data)
        setTotal(total)
      })()
    } catch (error) { 
      console.log(error)
    }

    setLoading(false)
  }, [queryParams])

  const handlePageChange = (page, pageSize) => {
    handleFilterChange({ page })
  }

  const handleFilterChange = (newFilters) => {
    const filters = {
      ...queryParams,
      ...newFilters,
    }

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(filters),
    })
  }

  const setNewFilters = (newFilters) => {
    if (
      !newFilters.hasOwnProperty('page') &&
      Object.keys(newFilters).length > 0
    ) {
      newFilters.page = PAGE
    }

    history.push({
      pathname: history.location.pathname,
      search: queryString.stringify(newFilters),
    })
  }

  return (
    <div className="job">
      <Filter
        onFilterChange={handleFilterChange}
        onSetNewFilters={setNewFilters}
        filters={queryParams}
      />

      <TicketList
        data={ticketList}
        onPageChange={handlePageChange}
        pagination={{ total: total, current: queryParams.page }}
        
      />
    </div>
  )
}

Job.propTypes = {}

export default Job
