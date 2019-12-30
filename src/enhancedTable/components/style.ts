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
      flexGrow: 1,
      padding: '9px 20px',
      display: 'flex',
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      width: 200,

    },
    prepar: {
      alignItems: 'center',
      justifyItems: 'center',
      display: 'flex',
      padding: '2px 2px',
    },
    // inputOfSearchBar: {
    //    flex: 1,
    //   padding:'0px 0px',
    // },
    // rootOfSearchIcon: {
    //   padding: '4px 4px',
    //    alignItems: 'center',
    //    display:'flex',
    // },

    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 250,
        },
      },
    },
  }));

