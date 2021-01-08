import { createMuiTheme } from '@material-ui/core/styles';
import { Shadows } from "@material-ui/core/styles/shadows"
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
    shadows: Array(25).fill("none") as Shadows,
    palette: {
        primary: {
            main: '#66d7d1',
        },
        secondary: {
            main: '#2e262e',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;
