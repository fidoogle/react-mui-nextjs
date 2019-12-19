import '@progress/kendo-theme-default/dist/all.css';
import Nav from '../components/nav'
import Head from 'next/head'

const Index = () => {
    
    return (
        <>
            <Head>
                <title>React Material UI</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://use.fontawesome.com/684e9e4879.js"></script>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
            </Head>
            <Nav />
            <h2>Welcome</h2>
            These pages contain stuff built with React Material UI.
        </>
    )
}

export default Index