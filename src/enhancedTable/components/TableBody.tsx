import { Component } from "react";
import { TableRow, TableCell, TableBody } from '@material-ui/core';
import EditInline from './InlineEditing';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FormDialog from './EditDialogs';
import React from "react";
import { ITableBodyContainer } from './TableBodyContainer';

interface IProps extends React.Props<ITableBodyContainer>, ITableBodyContainer {
  dataFromStore: Array<any>;
  onDeleteDispatch: (data: any) => any;
  onEditDispatch: (data: any, i: any) => void;
  // onEditIdDispatch:(id:any)=>void;

}


class TableBodyClass extends Component<IProps, any> {

  constructor(props: IProps) {
    super(props);
    this.state = {
      openInlineEdit: false,
      open: false,
      inlineEditRow: {},
      editRow: {},
      data: [],
      index: 0,
    };

  }


  componentDidUpdate(nextProps: any) {
    if (JSON.stringify(nextProps.allData) !== JSON.stringify(this.props.allData)) {
      this.setState({ data: this.props.allData });

    }
  }
  handleRemove(row: any) {
    this.props.onDeleteDispatch(row.id);
    console.log(row.id, 'rowId');

  }


  onEditAllData(id: any, editData: any) {
    this.props.onEditDispatch(editData, id);
    // this.props.onEditIdDispatch(id);

  }


  render() {
    return (<React.Fragment>
      {this.state.open && <FormDialog
        open={this.state.open}
        onClose={() => {
          this.setState({ open: false });

        }}
        rows={this.state.editRow}
        onEdit={(id, editedRow) => {

          this.onEditAllData(this.state.index, editedRow);
        }}
      />
      }
      <TableBody>

        {this.state.data && this.state.data.length > 0 && this.state.data.map((row: any, i: any) => (
          <TableRow key={i + ""}>
            <React.Fragment >
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
                        this.onEditAllData(i, editedRow);
                      }}
                    />
                    <TableCell>
                      <DeleteIcon onClick={() => this.handleRemove(row)} >
                        Delete
                    </DeleteIcon>
                    </TableCell>
                    <TableCell>
                    </TableCell>
                  </React.Fragment> :
                  <React.Fragment >
                    <TableCell>{row.id}</TableCell>

                    <TableCell>{row.email}</TableCell>

                    <TableCell>{row.first_name}</TableCell>

                    <TableCell>{row.last_name}</TableCell>
                    <TableCell>
                      <EditAttributesIcon onClick={() => {
                        this.setState({ openInlineEdit: true });
                        this.setState({ inlineEditRow: row });
                      }}>
                        Inline Edit
                  </EditAttributesIcon>
                    </TableCell>

                    <TableCell>
                      <DeleteIcon onClick={() => this.handleRemove(row)} >
                        Delete
                    </DeleteIcon>
                    </TableCell>
                    <TableCell>
                      <EditIcon onClick={() => {
                        this.setState({ open: true });
                        this.setState({ editRow: row });
                        this.setState({ index: i });
                      }}>
                        Edit
                   </EditIcon>
                    </TableCell>
                  </React.Fragment>
              }
            </React.Fragment>
          </TableRow>
        ))}
      </TableBody>
    </React.Fragment>

    )
  }



}

export { TableBodyClass as default }