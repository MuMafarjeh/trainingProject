import { TableRow, TableCell, TableBody, makeStyles, Theme, createStyles, Button, TextField, Dialog, Modal } from '@material-ui/core';
import getAllData from './getTableData';
import React, { useState, useContext, useEffect } from 'react';
import { withStyles } from '@material-ui/styles';
import FormDialog from './EditDialogs';
import { EditContext } from './editContext';
import EditInline from './InlineEditing';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { connect, useSelector, useDispatch } from 'react-redux';
import * as actionCreators from './connectComponent/action/allAction';
import { fetchData } from './connectComponent/action/allAction';
import { typeOfAction } from './connectComponent/action/actionType';
import { bindActionCreators } from 'redux';
import { ITableBodyContainer } from './TableBodyContainer';

interface IProps extends React.Props<ITableBodyContainer>, ITableBodyContainer {
  dataFromStore: Array<any>;
  onDeleteDispatch: (data: any) => void;
  onEditDispatch: (data: any) => void;
  onEdit: (data: any) => void;


}


function BodyTable(props: IProps) {
  const { dataFromStore, onDeleteDispatch, onEditDispatch } = props;
  const [data, setData] = useState([] as any);

  useEffect(() => {

    props.onEdit(dataFromStore);

  })


  const handleRemove = (row: any) => {
    console.log(row);
    const result = dataFromStore.slice(0);

    result.splice(row, 1);

    onDeleteDispatch(result);


  }

  const onEditAllData = (id: any, editData: any) => {
    const AllData = dataFromStore.slice(0);

    let newArr = [...AllData];
    newArr[editData.id - 1] = editData;
    console.log(editData.id);
    onEditDispatch(newArr);

  }


  const allRows = (row: any) => {

    return (<>

      {
        openInlineEdit && inlineEditRow && (inlineEditRow as any).id == row.id  ?
          <React.Fragment>
            <EditInline
              openInlineEdit={openInlineEdit}
              rows={inlineEditRow}
              onClose={() => { setopenInlineEdit(false) }}
              onEdit={(id, editedRow) => {

                onEditAllData(id, editedRow);

              }}

            /> </React.Fragment> :
          <React.Fragment>
            <TableCell >
              {row.id}

            </TableCell>

            <TableCell>
              {row.email}
            </TableCell>

            <TableCell>
              {row.first_name}
            </TableCell>

            <TableCell>
              {row.last_name}
            </TableCell>

          </React.Fragment>}

    </>
    )
  }

  const [open, setOpen] = React.useState(false);
  const [editRow, setRow] = React.useState({});

  const [inlineEditRow, setInlineEditRow] = React.useState({});

  const [openInlineEdit, setopenInlineEdit] = React.useState(false);

  const handleSave = () => {
    setopenInlineEdit(false);
  }
  return (<>

    {open && <FormDialog
      open={open}
      onClose={() => { setOpen(false) }}
      rows={editRow}
      onEdit={(id: any, editedRow: any) => {

        onEditAllData(id, editedRow);
      }}
    />
    }

    <TableBody >

      {dataFromStore && dataFromStore.length > 0 && dataFromStore.map((row: any, i: any) => (

        <TableRow key={row.id + row.i} >
          {allRows(row)
          }

          <TableCell>
            <DeleteIcon onClick={() => handleRemove(i)} >
              Delete
            </DeleteIcon>
          </TableCell>
          <TableCell>
            <EditIcon onClick={() => {
              setOpen(true);
              setRow(row);
            }}>
              Edit
           </EditIcon>
          </TableCell>
          <TableCell>
            {openInlineEdit && inlineEditRow && (inlineEditRow as any).id == row.id ?
              <CheckCircleIcon onClick={handleSave}>
                Save
            </CheckCircleIcon> : <EditAttributesIcon onClick={() => {
                setopenInlineEdit(true);
                setInlineEditRow(row);
              }}>

                Inline Edit
          </EditAttributesIcon>

            }
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </>

  )

}

export default (BodyTable)