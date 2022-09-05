import React from 'react'

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button className='link-button' onClick={() => paginate(number)}>{number}</button>
            {/* <a onClick={() => paginate(number)} href='javascript:;' className='page-link'>
              {number}
            </a> */}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination