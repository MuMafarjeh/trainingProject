import { TableCell, TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';



interface IProps {
  rows: any
  onClose: any;
  openInlineEdit: boolean
  onEdit: (id: any, e: any) => void;
 
}
interface State {
  id: string;
  email: string;
  first_name: string;
  last_name: string;

}
export default function EditInline(props: IProps) {
  const { rows, onClose, openInlineEdit, onEdit } = props;
  const [close, setClose] = useState(false);
  const [values, setValues] = React.useState<State>({
    id: rows.id,
    email: rows.email,
    first_name: rows.first_name,
    last_name: rows.last_name,
  });
  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
     setValues({ ...values, [prop]: event.target.value })
     console.log(event.target.value, 'value');
     console.log(values, 'values');
    // onEdit(values.id, values)
   // handleSave();
  };
  const handleSave = () => {
    onEdit(values.id, values)
   // console.log(values,"Values");
    
     onClose();
  }
  return (

    <React.Fragment key={rows.id}>
      <TableCell>{rows.id}</TableCell>
      <TableCell><TextField value={values.email} onChange={handleChange('email')} /></TableCell >
      <TableCell><TextField value={values.first_name} onChange={handleChange('first_name')} /></TableCell>
      <TableCell><TextField value={values.last_name} onChange={handleChange('last_name')} /></TableCell>
       <TableCell><CheckCircleIcon onClick={handleSave}>Save</CheckCircleIcon></TableCell>   
    </React.Fragment>


  );

}

