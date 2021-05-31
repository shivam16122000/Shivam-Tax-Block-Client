import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#0B72B9';

const arcOrange = '#FFBA60';
const arcGray = '#868686';
const theme = createMuiTheme({
    palette: {
        common: {
            blue: `${arcBlue}`,
            orange: `${arcOrange}`
        },
        primary: {
            main: `${arcBlue}`
        },
        secondary: {
            main: `${arcOrange}`
        }
    },
    typography: {
        h2: {
            fontFamily: 'Raleway',
            fontSize: '1.7rem',
            fontWeight: 700,
            color: `${arcBlue}`,
            lineHeight: 1.5
        },
        h3: {
            fontSize: '1.9rem',
            color: arcBlue
        },
        h6: {
            fontSize: '1.3rem',
            color: 'red'
        }
    }
});

export default theme;
