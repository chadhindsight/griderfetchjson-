import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

// Label the type of data that each property references
interface Todo {
    id: number;
    name: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const name = todo.name;
    const completed = todo.completed;

    logTodo(id, name, completed);
});

const logTodo = (id: number, name: string, completed: boolean) => {
    console.log(`
    The Todo with ID: ${id}
    Has a name of: ${name}
    Is it finished? ${completed}
  `);
};

