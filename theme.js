import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0078AE'
        },
        secondary: {
            main: '#279A2C'
        },
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 20,
            }
        }
    },
    status: {
        danger: 'orange',
    },
});

export default theme;