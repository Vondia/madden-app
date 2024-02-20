'use Client'
import { css } from '../../../styled-system/css'
import { FC } from 'react'

type PaginationProps = {
  totalPages: number
  currentPage: number
  onPageChange: (newPage: number) => void
}

export const Pagination: FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const handlePrevPage = () => {
    if (currentPage > 0) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages - 1) {
      onPageChange(currentPage + 1)
    }
  }

  const handlePageClick = (pageNumber: number) => {
    onPageChange(pageNumber)
  }

  const generatePageNumbers = () => {
    const pages = []

    for (let i = 0; i < totalPages; i++) {
      pages.push(i + 1)
    }

    return pages
  }

  const isActivePage = (pageNumber: number) => {
    return pageNumber === currentPage
  }

  return (
    <span className={wrapper}>
      <button
        className={paginationButton}
        onClick={handlePrevPage}
        disabled={currentPage === 0}
      >
        &lt;--
      </button>
      {generatePageNumbers().map(pageNumber => (
        <button
          className={`${
            isActivePage(pageNumber - 1) ? activeButton : paginationButton
          }`}
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber - 1)}
          disabled={pageNumber - 1 === currentPage}
        >
          {pageNumber}
        </button>
      ))}
      <button
        className={paginationButton}
        onClick={handleNextPage}
        disabled={currentPage === totalPages - 1}
      >
        --&gt;
      </button>
    </span>
  )
}

const paginationButton = css({
  p: '2',
  gap: '2',
  border: 'none',
  minWidth: '10',
  rounded: 'lg',
  cursor: 'pointer',
  bg: { base: 'gray.100', _hover: 'gray.400' },
})

const activeButton = css({
  p: '2',
  gap: '2',
  border: 'none',
  minWidth: '10',
  rounded: 'lg',
  fontWeight: 'bold',
  cursor: 'pointer',
  bg: { base: 'gray.300', _hover: 'gray.400' },
})

const wrapper = css({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '2',
  mt: '4',
})

export default Pagination
