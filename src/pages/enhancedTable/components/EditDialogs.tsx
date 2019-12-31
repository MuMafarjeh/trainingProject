import React, { useContext, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TableBody, TableRow, TableCell } from '@material-ui/core';

interface IProps {
  rows: any
  onClose: any;
  open: boolean
  onEdit: (id: any, e: any) => void;

}
interface State {
  id: string;
  email: string;
  first_name: string;
  last_name: string;

}

export default function FormDialog(props: IProps) {
  const { rows, onClose, open, onEdit } = props;

  const [values, setValues] = React.useState<State>({
    id: rows.id,
    email: rows.email,
    first_name: rows.first_name,
    last_name: rows.last_name,
  });

  useEffect(() => {
    setValues({
      id: rows.id,
      email: rows.email,
      first_name: rows.first_name,
      last_name: rows.last_name,
    })
  }, []);

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
    console.log(event.target.value, 'values');
    console.log(values, 'values');
    
  };
  const handleSave = () => {
    // console.log(values);
    onEdit(values.id, values)
    onClose();
  }
  return (
    <React.Fragment>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
  <DialogTitle id="form-dialog-title">Edit the user information "{rows.first_name}"</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            Editing  the user information
          </DialogContentText> */}
          <TableBody>
            <TableRow>
              {/* <TableCell>{row.Header}</TableCell> */}
              {/* <TableCell  >
                {rows.id}
              </TableCell> */}
              <TableCell><TextField
                value={values.email}
                onChange={handleChange('email')}
              />
              </TableCell>
              <TableCell> <TextField
                value={values.first_name}
                onChange={handleChange('first_name')}
              />
              </TableCell>
              <TableCell>
                <TextField
                  value={values.last_name}
                  onChange={handleChange('last_name')}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="secondary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
