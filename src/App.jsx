import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button, ThemeProvider } from '@material-ui/core';
import { PhotoCamera, TheatersRounded } from '@material-ui/icons';

import useStyles from './styles';

const cards_cp = [1,2,3,4,5,6,7,8,9];

const App = () => {
    const classes = useStyles();

    return (
        <>
            <CssBaseline/>
            <AppBar position="relative">
                <Toolbar>
                    <PhotoCamera />
                    <Typography variant="h6">Photo Album</Typography>
                </Toolbar>
            </AppBar>
            <main>
                <div className={classes.container_1}>
                    {/* add inline css */}
                    <Container maxWidth="sm" style={{ marginTop: '10px' }}>
                        <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
                            Photo Album!
                        </Typography>
                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            Photo Album! This is to masdkf skdf skdf skdfj skdjfwoen vdkjs dowj wodfn
                        </Typography>
                    </Container>
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">See My Album</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">Hi, Invite You</Button>
                        </Grid>
                    </Grid>
                </div>
                <Container className={classes.cardGrid} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards_cp.map(()=>(
                            <Grid item key={cards_cp} xs={12} sm={6} md={4}>
                                <Card className={classes.card}>
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image Title"
                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5">
                                            Heading
                                        </Typography>
                                        <Typography gutterBottom variant="h5">
                                            This is a media card, contenxt dto hi tocndf sod fd.
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" color="primary">View</Button>
                                        <Button size="small" color="primary">Edit</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
        </> 
    )
}

export default App;