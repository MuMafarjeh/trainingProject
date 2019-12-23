import { makeStyles, createStyles, Theme, withStyles } from "@material-ui/core";
import { fade } from "@material-ui/core/styles";


const style = (theme: Theme) => ({

  root: {
    marginTop: theme.spacing(1),
    overflowX: 'auto',
    marginBottom: theme.spacing(3),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2)


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




});
const useStyles = withStyles((theme: Theme) =>
  createStyles(style(theme) as any),
);
export { useStyles }



export const useStylesSearchBar = makeStyles((theme: Theme) =>
  createStyles({
    rootOfSearchBar: {
      
      padding: '9px 20px',
       display: 'flex',
       flex: 1,
       flexDirection: 'row',
       alignItems: 'center',
       width: 400,
    },
    prepar:{
       alignItems: 'center',
      justifyItems:'center',
      display:'flex',
      padding: '2px 2px',
    },
    inputOfSearchBar: {
       flex: 1,
      padding:'0px 0px',
    },
    rootOfSearchIcon: {
      padding: '4px 4px',
       alignItems: 'center',
       display:'flex',
    },
  }));

