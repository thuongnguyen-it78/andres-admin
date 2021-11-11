import { priority, status } from 'constants/job'

export function getStatus(s) {
  return status.find((item) => item.id === s)
}

export function getPriority(s) {
  return priority.find((item) => item.id === s)
}

function pad2(n) {
  return (n < 10 ? '0' : '') + n
}

export function formatDate(d) {
  const date = new Date(d)
  const month = pad2(date.getMonth() + 1) //months (0-11)
  const day = pad2(date.getDate()) //day (1-31)
  const year = date.getFullYear()

  return `${day}-${month}-${year}`
}
