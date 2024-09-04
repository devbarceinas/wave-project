import { useState } from "react";
import { BsEye, BsTrash } from "react-icons/bs";
import { FaSort } from "react-icons/fa";
import { RiFilter2Fill } from "react-icons/ri";
import { Badge } from "./Badge";
import './table.css';
import { Pagination } from "./Pagination";

export interface TableProps {
  data: TableInfo[];
};

export interface TableInfo {
  id: number,
  name: string;
  email: string;
  state: string;
  orderNumber: string;
  status: 'Enviado' | 'Pendiente' | 'Cancelado';
}

export const Table = ({
  data
}: TableProps) => {
  const [sortKey, setSortKey] = useState<keyof TableInfo>('id');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const [searchInfo, setSearchInfo] = useState('');

  const itemsPerPage = 5;

  const handleSort = (key: keyof TableInfo) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('desc');
    }
  }

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchInfo.toLowerCase()) ||
      item.status.toLowerCase().includes(searchInfo.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
    const aKey = a[sortKey];
    const bKey = b[sortKey];

    if (aKey < bKey) return sortOrder === 'asc' ? -1 : 1;
    if (aKey > bKey) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const paginatedData = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="storybook-table">
      <div className="storybook-table--row storybook-table--header">
        <div className="storybook-table--cell">
            <div className="storybook-table--cell-sort">
              Nombre
              <FaSort
                className="storybook-table--cell-cursor" 
                onClick={() => handleSort('name')}
              />
            </div>
        </div>
        <div className="storybook-table--cell">Correo</div>
        <div className="storybook-table--cell">Estado</div>
        <div className="storybook-table--cell">No. de pedido</div>
        <div className="storybook-table--cell">
          <div className="storybook-table--cell-sort">
            Estatus
            <RiFilter2Fill
              className="storybook-table--cell-cursor" 
              onClick={() => handleSort('status')}
            />
          </div>
        </div>
        <div className="storybook-table--cell">Acciones</div>
      </div>
      {paginatedData?.map(item => (
         <div key={item.id} className="storybook-table--row">
          <div className="storybook-table--cell">{item.name}</div>
          <div className="storybook-table--cell">{item.email}</div>
          <div className="storybook-table--cell">{item.state}</div>
          <div className="storybook-table--cell">{item.orderNumber}</div>
          <div className="storybook-table--cell">
            <Badge
              variant={item.status}
              text={item.status}
            />
          </div>
          <div className="storybook-table--cell">
            <div className="storybook-table--icons">
              <BsEye/>
              <BsTrash/>
            </div>
          </div>
        </div>
      ))}
      <div className="storybook-table--pagination">
        <Pagination
          onPageChange={(page) => setCurrentPage(page)}
          currentPage={currentPage}
          totalPage={Math.ceil(filteredData.length / itemsPerPage)}
        />
      </div>
    </div>
  );
};