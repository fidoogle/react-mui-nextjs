import Nav from '../components/nav'
import CardActionAreaMUI from '../components/card-action-area'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme';

const Cards = () => {
    return (
        <ThemeProvider theme={theme}>
            <Nav/>
            <div>
                <h2>Material UI Cards</h2>
                <div style={carouselStyle}><CardActionAreaMUI/> &nbsp; <CardActionAreaMUI/> &nbsp; <CardActionAreaMUI/></div>
            </div>
        </ThemeProvider>
    )
}

const carouselStyle = {
    display: 'flex',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
}

export default Cards;