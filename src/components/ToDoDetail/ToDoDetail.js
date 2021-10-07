import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ToDoDetail = () => {
    const { todoId } = useParams();
    const [todo, setToDo] = useState({});
    let status;
    if (todo.completed) {
        status = 'completed';
    }
    else {
        status = 'processing';
    }
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/todos/${todoId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setToDo(data))
    }, [todoId])
    return (
        <Box sx={{
            mx: 'auto',
            width: 300
        }}
        >
            <div style={{ backgroundColor: "#ff6e40", padding: "40px", borderRadius: "30px", color: "white" }}>
                <h4>ID: {todo.id}</h4>
                <h4>Tittle: {todo.title}</h4>
                <h4>Status: {status}</h4>
            </div>
        </Box>
    );
};

export default ToDoDetail;