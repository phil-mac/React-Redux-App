import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getSolution} from '../actions';

import { makeStyles } from '@material-ui/core/styles';
import {Paper, Typography, Divider, Button, TextField, Grid, CircularProgress} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2),
      textAlign: 'center'
    },
  }));

export default () => {
    const solution = useSelector(state => state.solution);
    const isFetching = useSelector(state => state.isFetching);

    const dispatch = useDispatch();

    const [op, setOp] = useState('derive');
    const [exp, setExp] = useState('x%5E2');

    // const handleSetOp = newOp => setOp(newOp);

    const classes = useStyles();

    return(
        <Paper className={classes.root}>
            <Typography variant="h4" component="h3">
                Advanced Math Calculator
            </Typography>
            <Typography component="p">
                Select an operation, enter an expression, and click Go!
            </Typography>
            <Divider />

            <br/>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Button variant='contained' onClick={() => setOp('simplify')}>Simplify</Button>
                <Button variant='contained' onClick={() => setOp('factor')}>Factor</Button>
                <Button variant='contained' onClick={() => setOp('derive')}>Derive</Button>
                <Button variant='contained' onClick={() => setOp('integrate')}>Integrate</Button>
            </Grid>
            
            {/* <Button variant='contained' onClick={() => setOp('area')}>Area Under Curve	</Button> */}

            <br/>
            <br/>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <span >{op}</span>
            <TextField 
            id="outlined-basic" 
            variant="outlined" 
            onChange={e => setExp(e.target.value)} value={exp}
            style={{margin: '0 10px'}}/>
            <Button 
                variant='contained' 
                color='primary' 
                onClick={() => dispatch(getSolution(op, exp))}
            >
                Go
            </Button>
            </Grid>
            <br/>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center">
              <Paper>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    style={{minWidth:'50px', minHeight:'50px'}}>
                    <div >
                        {isFetching && <CircularProgress />}
                        {solution}
                    </div>
                    </Grid>
                </Paper>
            </Grid>
            
        </Paper>
    )
}