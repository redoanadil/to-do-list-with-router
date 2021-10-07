import { Button, Checkbox, Grid } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import React from 'react';
import { useHistory } from 'react-router';

const ToDo = (props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { id, title, completed } = props.todo;
    let status, bg;
    if (completed) {
        status = 'completed';
        bg = "#05b171";
    }
    else {
        status = 'processing';
        bg = '#ff6e40';
    }
    const url = `/todo/${id}`
    const history = useHistory();
    const handleClick = () => {
        history.push(url);
    }
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{
                width: '75%', mx: 'auto', my: 3, py: 2, fontSize: 14, fontWeight: 400, borderRadius: 3
            }}
            style={{ backgroundColor: "white" }}
        >
            <Grid item xs={1}>
                <Checkbox {...label} sx={{
                    '&.Mui-checked': {
                        color: deepOrange['A200'],
                    }
                }} />
            </Grid>
            <Grid item xs={2}>
                <p>{id}</p>
            </Grid>
            <Grid item xs={3}>
                <Button onClick={handleClick} variant="contained" color="success" size="small">
                    Show Details
                </Button>
            </Grid>
            <Grid item xs={4}>
                <p>{title}</p>
            </Grid>
            <Grid item xs={1}>
                <p style={{ backgroundColor: bg, borderRadius: "10px", color: "white", fontSize: "13px" }}>{status}</p>
            </Grid>
        </Grid>
    );
};

export default ToDo;