import { makeStyles, Theme, withStyles, createStyles } from "@material-ui/core";

const style = (theme: Theme) => ({
    root: {

        // marginTop: theme.spacing(1),
        // marginBottom: theme.spacing(10),
        marginLeft: theme.spacing(7),
        marginRight: theme.spacing(200),

    },
    selectedChart: {
        marginTop: 100,
        paddingTop: 20,
        color: '#fff',
        float: 'right',
    },
    chartStyle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(10),
    },

});
const useStyles = withStyles((theme: Theme) =>

    createStyles(style(theme) as any),

);
export { useStyles as default }

export const useStyleChart = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: 1300,
            marginBottom: theme.spacing(10),
            marginLeft: theme.spacing(5),
        },
    }));