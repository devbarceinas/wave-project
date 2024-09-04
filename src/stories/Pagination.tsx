import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './pagination.css';

export interface PaginationProps {
  currentPage: number;
  totalPage: number;
  onPageChange: (page: number) => void;
};

export const Pagination = ({
  currentPage,
  totalPage,
  onPageChange
}: PaginationProps) => {

  const handlePrevious = () => currentPage > 1 ? onPageChange(currentPage - 1) : '';
  const handleNext = () => currentPage < totalPage ? onPageChange(currentPage + 1) : '';

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <li 
          key={i} 
          onClick={() => onPageChange(i)}
          className={`storybook-pagination--item ${(i === currentPage) ? 'active' : ''}`}>
          {i}
        </li>
      )
    }

    return pages;
  };

  return (
    <nav className="storybook-pagination">
      <ul className='storybook-pagination--list'>
        <li 
          className={`storybook-pagination--item ${(currentPage === 1) && 'disabled'}`}
          onClick={handlePrevious}>
          <BsChevronLeft/>
        </li>
        {renderPageNumbers()}
        <li
          className={`storybook-pagination--item ${(currentPage === totalPage) && 'disabled'}`}
          onClick={handleNext}>
          <BsChevronRight/>
        </li>
      </ul>
    </nav>
  );
};