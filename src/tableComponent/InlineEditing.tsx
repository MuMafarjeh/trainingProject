import { TableBody, TableCell, TextField, TableRow, Button, makeStyles, Theme, createStyles } from "@material-ui/core";
import React, { useEffect } from "react";



interface IProps {
  rows: any
  onClose: any;
  openInlineEdit: boolean
  onEdit: (id:any,e: any) => void;

}
interface State {
  id: string;
  email: string;
  first_name: string;
  last_name: string;

}
export default function EditInline(props: IProps) {
  const { rows, onClose, openInlineEdit, onEdit } = props;
  const [values, setValues] = React.useState<State>({
    id: rows.id,
    email: rows.email,
    first_name: rows.first_name,
    last_name: rows.last_name,
  });


  

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
    onEdit(values.id,values)
  };

  return (

    <React.Fragment>
      <TableCell >
        {rows.id}
      </TableCell>

      <TableCell  ><TextField

        value={values.email}
        onChange={handleChange('email')}
      />
      </TableCell >

      <TableCell> <TextField

        value={values.first_name}
        onChange={handleChange('first_name')}
      />
      </TableCell>

      <TableCell  >
        <TextField
          value={values.last_name}
          onChange={handleChange('last_name')}
        />
      </TableCell>

    </React.Fragment>

  );

}

