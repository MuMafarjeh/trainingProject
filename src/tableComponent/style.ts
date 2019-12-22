import { makeStyles, createStyles, Theme } from "@material-ui/core";





const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '80%',
      marginTop: theme.spacing(3),
      overflowX: 'auto',
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(2),


    },
    table: {
      minWidth: 650,

    },
    input: {
      marginLeft: theme.spacing(2),
      flex: 1,
      marginTop: '5px',
      padding: '2px 4px',
      display: 'flex',

      width: 400,
    },
    theForm: {
      marginTop: '5px',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },

    rootOfSearchBar: {
      marginTop: '5px',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    inputOfSearchBar: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    rootSrearchBar: {
      marginTop: '5px',
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    inputSearchBar: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },

  }),
);



export { useStyles as default }