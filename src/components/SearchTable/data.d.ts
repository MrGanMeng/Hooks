export interface SearchTableProps {
  columns: Array;
  dataSource: Array;
  filter: Array;
}

export interface FilterBarProps {
  name: String;
  label: String;
  value: String;
  filter: Array;
}
