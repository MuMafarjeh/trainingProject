import { Component } from "react";
import { TableRow, TableCell, TableBody } from '@material-ui/core';
import EditInline from './InlineEditing';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FormDialog from './EditDialogs';
import React from "react";
// import IProps from './interface';



class TableBodyClass extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      openInlineEdit: false,
      open: false,
      inlineEditRow: {},
      editRow: {},
      data: [],
    };

  }
  componentDidMount() { }

  componentDidUpdate(nextProps:any) {
    if (JSON.stringify(nextProps.dataFromStore) != JSON.stringify(this.props.dataFromStore)) {
      this.setState({ data: nextProps.dataFromStore });
      this.props.onEdit(nextProps.dataFromStore);
    }
  }
  handleRemove(row:any) {
    console.log(row);
    const result = this.props.dataFromStore.slice(0);
    console.log(result, "result");
    result.splice(row, 1);
    this.props.onDeleteDispatch(result);
  }
  onEditAllData(id:any, editData:any) {
    const AllData = this.props.dataFromStore.slice(0);
    console.log(AllData, "allData");

    let newArr = [...AllData];
    newArr[editData.id - 1] = editData;
    console.log(editData.id);
    this.props.onEditDispatch(newArr);

  }

  allRows(row:any) {

    return (<>

      {
        this.state.openInlineEdit && this.state.inlineEditRow && (this.state.inlineEditRow).id == row.id ?
          <React.Fragment>
            <EditInline
              openInlineEdit={this.state.openInlineEdit}
              rows={this.state.inlineEditRow}
              onClose={() => {
                this.setState({ openInlineEdit: false });
              }}
              onEdit={(id, editedRow) => {

                this.onEditAllData(id, editedRow);

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

  render() {
    // this.props.onEdit(this.props.dataFromStore);
    return (<>

      {this.state.open && <FormDialog
        open={this.state.open}
        onClose={() => {
          this.setState({ open: false });

        }}
        rows={this.state.editRow}
        onEdit={(id, editedRow) => {

          this.onEditAllData(id, editedRow);
        }}
      />
      }

      <TableBody >

        {this.props.dataFromStore && this.props.dataFromStore.length > 0 && this.props.dataFromStore.map((row:any, i:any) => (

          <TableRow key={row.id + row.i} >
            {this.allRows(row)
            }

            <TableCell>
              <DeleteIcon onClick={() => this.handleRemove(i)} >
                Delete
                    </DeleteIcon>
            </TableCell>
            <TableCell>
              <EditIcon onClick={() => {
                this.setState({ open: true });

                this.setState({ editRow: row });

              }}>
                Edit
                   </EditIcon>
            </TableCell>
            <TableCell>
              {this.state.openInlineEdit && this.state.inlineEditRow && (this.state.inlineEditRow).id == row.id ?
                <CheckCircleIcon onClick={() => {
                  this.setState({ openInlineEdit: false });
                }}>
                  Save
                    </CheckCircleIcon> : <EditAttributesIcon onClick={() => {
                  this.setState({ openInlineEdit: true });

                  this.setState({ inlineEditRow: row });

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



}

export { TableBodyClass as default }