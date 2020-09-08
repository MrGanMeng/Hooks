export interface ActionType {
  handleOpen: (record?: TableListItem) => void;
  current: object;
}

export interface TableListItem {
  heroName: string;
  heroOrientation: number;
  exportAbility: string | number;
  defenseAbility: string | number;
  id: string;
}

export interface AddHeroDrawerProps {
  UpdateData: (value: TableListItem) => void;
}

export interface ColumnsItem {
  title: string | JSX.Element;
  key: string;
  dataIndex: string;
  render: (text: string | number, record: any) => void;
}
