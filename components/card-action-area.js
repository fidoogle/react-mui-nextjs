import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from "@material-ui/core/CardContent";
import Icon from '@material-ui/core/Icon';
import Head from 'next/head'

const useStyles = makeStyles({
    card: {
        width: 225
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)"
    },
    title: {
        fontSize: 14
    },
    pos: {
        marginBottom: 12
    }
});

export default function SimpleCard() {
    const classes = useStyles();

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
            <Card className={classes.card}>
                <CardContent style={{
                    padding: 0
                }}>
                    <div style={{
                        color: 'white',
                        background: 'linear-gradient(180deg, #5691C8 0%, #0078AE 100%)',
                        padding: 10,
                        display: 'flex',
                        'flex-wrap': 'nowrap',
                        'justify-content': 'center',
                        'align-items': 'center',
                    }}>
                        <Icon>drafts-outlined</Icon> &nbsp; <span>10/3/2019</span>
                    </div>

                    <div style={{
                        color: 'black',
                        background: '#b6e8ff',
                        padding: 10,
                        display: 'flex',
                        'flex-wrap': 'nowrap',
                        'justify-content': 'center',
                        'align-items': 'center',
                    }}>
                        <span>Bill Amount: $47.19</span>
                    </div>
                </CardContent>
                <CardActionArea style={{
                    color: 'white',
                    background: 'linear-gradient(180deg, #6D9F43 0%, #279A2C 100%)',
                    padding: 10,
                    display: 'flex',
                    'flex-wrap': 'nowrap',
                    'justify-content': 'center',
                    'align-items': 'center',
                }}>
                    <Icon>search</Icon> &nbsp; <span>View bill</span>
                </CardActionArea>
            </Card>
        </>
    );
}
