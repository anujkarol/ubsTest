export interface IItem {
  title: string;
  href: string;
  ingredients: string;
  thumbnail: string;
}

export interface ITableGrid {
  rows: IItem[];
  message: string;
  isDataLoading: boolean;
  tablelHeaders: string[];
  colWidth: number[];
  moreDetails: (item: any) => void;
}
export interface IUBSProps {
  isDataLoading: boolean;
  data: IItem[];
  getData: () => void;
  isServerDown: boolean;
}
export interface IUBSState {
  isModalOpen: boolean;
  ingredients: string;
}
