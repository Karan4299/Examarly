import { ModalDataProps } from "./ModalDataProps.interface";

export interface PopOverProps {
  positionForElement: {
    left: number;
    top: number;
  };
  widthForPopOver: number;
  dataForModal: ModalDataProps[];
}
