import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 5,
        backgroundColor: theme.palette.background.paper,

    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    appBArAr: {
        display: "flex",
        padding: 30,

    },
    grow: {
        flexGrow: 1,
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',

        },
        marginLeft: theme.spacing(50),

    },
    button: {
        margin: theme.spacing(1),
        borderRadius: '20px',

    },
    allButton: {
        marginLeft: theme.spacing(20),
    },
    appBarContent: {
        display: "flex",
        marginRight: theme.spacing(2),
    },
    title: {
        marginLeft: theme.spacing(5),
        display: 'flex',
        alignItems: 'center',

    },

}));

export { useStyles as default }