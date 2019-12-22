import { createStyles, Theme } from "@material-ui/core";
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import { ThemeProviderProps } from "@material-ui/styles/ThemeProvider";

const myStyle = (theme: Theme) => ({
    root: {
        marginTop: 10,
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(3),
    },
    textField: {
        flexBasis: 200,
    },
    btn: {
        backgroundColor: '#555555',
    },

    kgField: {
        marginLeft: 50,

    },
    amountField: {
        width: 400,
    },

})

const useStyles = makeStyles((theme: Theme) =>

    createStyles(myStyle(theme) as any),

);
export { useStyles as default }