import { useMemo, useState } from "react";
import { BsEye, BsTrash } from "react-icons/bs";
import { Badge } from "./Badge";
import './table.css';

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

  const [sort, setSort] = useState<{key: keyof TableInfo; direction: 'ascending' | 'descending'} | null>(null);
  const [filter, setFilter] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const filteredInfo = useMemo(() => {
    if (filter === 'All') {
      return data;
    }

    return data.filter(item => item.status === filter);
  }, [data, filter]);

  const sortedData = useMemo(() => {
    if (sort !== null) {
      const sorted = [...filteredInfo].sort((a, b) => {
        if (a[sort.key] < b[sort.key]) {
          return sort.direction === 'ascending' ? -1 : 1;
        }
        if (a[sort.key] > b[sort.key]) {
          return sort.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
      return sorted;
    }
    return filteredInfo;
  }, [filteredInfo, sort]);

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return sortedData.slice(start, end);
  }, [sortedData, currentPage, itemsPerPage]);

  const requestSort = (key: keyof TableInfo) => {
    let direction: 'ascending' | 'descending' = 'ascending';
    if (sort && sort.key === key && sort.direction === 'ascending') {
      direction = 'descending';
    }
    setSort({ key, direction });
  };

  return (
    <div className="storybook-table">
      <div className="storybook-table--row storybook-table--header">
        <div className="storybook-table--cell">Nombre</div>
        <div className="storybook-table--cell">Correo</div>
        <div className="storybook-table--cell">Estado</div>
        <div className="storybook-table--cell">No. de pedido</div>
        <div className="storybook-table--cell">Estatus</div>
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
    </div>
  );
};