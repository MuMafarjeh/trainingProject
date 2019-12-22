import { makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        flexGrow: 5,
        backgroundColor: theme.palette.background.paper,
        marginTop: 10,

    },
    appBArAr: {
        display: "flex",
        padding: 30,

    },
    button: {
        margin: theme.spacing(1),
    },

}));

export { useStyles as default }