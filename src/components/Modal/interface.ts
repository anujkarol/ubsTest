export interface IModalProps {
  children: any;
  isCloseIcon: boolean;
  handleCloseModal?: () => void;
  title?: string;
  style?: any;
  isShow: boolean;
}
