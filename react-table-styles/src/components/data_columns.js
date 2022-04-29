import { format } from 'date-fns'

export const COLUMNS = [
  {
    Header: 'OrderId',
    Footer: 'OrderId',
    accessor: 'OrderId',
    disableFilters: true,
    sticky: 'left'
  },
  {
    Header: 'Name',
    Footer: 'Name',
    accessor: 'Name',
    sticky: 'left'
  },
  {
    Header: 'Plan',
    Footer: 'Plan',
    accessor: 'Plan',
    sticky: 'left'
  },
  {
    Header: 'OrderUpdatedOn',
    Footer: 'OrderUpdatedOn',
    accessor: 'OrderUpdatedOn',
    // Cell: ({ value }) => {      return format(new Date(value), 'dd/MM/yyyy')    }
  }
]



// export const GROUPED_COLUMNS = [
//   {
//     Header: 'Id',
//     Footer: 'Id',
//     accessor: 'id'
//   },
//   {
//     Header: 'Name',
//     Footer: 'Name',
//     columns: [
//       {
//         Header: 'First Name',
//         Footer: 'First Name',
//         accessor: 'first_name'
//       },
//       {
//         Header: 'Last Name',
//         Footer: 'Last Name',
//         accessor: 'last_name'
//       }
//     ]
//   },
//   {
//     Header: 'Info',
//     Footer: 'Info',
//     columns: [
//       {
//         Header: 'Date of Birth',
//         Footer: 'Date of Birth',
//         accessor: 'date_of_birth'
//       },
//       {
//         Header: 'Country',
//         Footer: 'Country',
//         accessor: 'country'
//       },
//       {
//         Header: 'Phone',
//         Footer: 'Phone',
//         accessor: 'phone'
//       }
//     ]
//   }
// ]
