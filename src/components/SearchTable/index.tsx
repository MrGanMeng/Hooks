import React from 'react';
import { Table } from 'antd';
import { SearchTableProps } from './data';
import FilterBar from './Filter';

import styles from './index.less';

const SearchTable = (props: SearchTableProps) => {
  const { columns, dataSource, filter } = props;
  console.log(props);
  return (
    <div className={styles.searchTable}>
      {filter && <FilterBar filter={filter} />}
      <Table columns={columns} dataSource={dataSource} />
    </div>
  );
};

export default SearchTable;
