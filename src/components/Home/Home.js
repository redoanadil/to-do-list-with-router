import { Checkbox, Grid } from '@mui/material';
import { deepOrange } from '@mui/material/colors';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ToDo from '../ToDo/ToDo';

const Home = () => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [todos, setToDos] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(res => res.json())
            .then(data => setToDos(data))
    }, [])
    return (
        <div>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                sx={{
                    width: '75%', mx: 'auto', py: 1, fontSize: 15, fontWeight: 500, borderRadius: 3
                }}>
                <Grid item xs={1}>
                    <Checkbox {...label} sx={{
                        '&.Mui-checked': {
                            color: deepOrange['A200'],
                        }
                    }} />
                </Grid>
                <Grid item xs={2}>
                    <p>ID</p>
                </Grid>
                <Grid item xs={3}>
                    <p>Details</p>
                </Grid>
                <Grid item xs={4}>
                    <p>Tittle</p>
                </Grid>
                <Grid item xs={1}>
                    <p>Status</p>
                </Grid>
            </Grid>
            {
                todos.map(todo =>
                    <ToDo
                        key={todo.id}
                        todo={todo}>
                    </ToDo>)
            }
        </div>
    );
};

export default Home;