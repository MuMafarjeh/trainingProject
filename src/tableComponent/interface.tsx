import { ITableBodyContainer } from "./TableBodyContainer";

export interface IProps extends React.Props<ITableBodyContainer>, ITableBodyContainer {
    dataFromStore: Array<any>;
    onDeleteDispatch: (data: any) => void;
    onEditDispatch: (data: any) => void;
    onEdit: (data: any) => void;

}