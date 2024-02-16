'use Client'
import { css } from '../../../styled-system/css'
import { FC, useState } from 'react'

type PaginationProps = {
  totalPages: number
  onPageChange: (newPage: number) => void
}

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState(0)

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
      onPageChange(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
      onPageChange(currentPage - 1)
    }
  }

  return (
    <div>
      <button onClick={handlePrevPage} disabled={currentPage === 0}>
        Prev Page
      </button>
      <span>
        Page {currentPage + 1} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages - 1}
      >
        Next Page
      </button>
    </div>
  )
}
