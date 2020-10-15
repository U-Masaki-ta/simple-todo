import React from 'react';

const Container = (props) => {
    const itemList = [
        {
            title : "todo",
            items : props.items.filter(todo => !todo.isDone)
        },
        {
            title : "done",
            items : props.items.filter(todo => todo.isDone)
        }
    ]

    return (
        <div className = "container-wrapper">
            <div className = "container">
                <TodoForm />
                {
                    itemList.map(elem =>(
                        <TodoList
                            key ={elem.title}
                            title = {elem.title}
                            items = {elem.items} />
                    ))
                }
            </div>
        </div>
    )
};

const TodoForm =(props) =>(
    <form className = "form" method = "POST">
        <input type = "text" name = "todo" autoComplete = "off"/>
        <button type = "submit" className = "btn btn-primary">ADD</button>
    </form>
);

const TodoList = (props) =>(
    <div>
        <label className = "table-title">{props.title}</label>
        <table className = "todo-list">
            <tbody>
                {
                    props.items.map(item =>(
                        <TodoItem key ={item.id} item = {item} />
                    ))
                }
            </tbody>
        </table>
    </div>
);

const TodoItem =(props) => (
    <tr>
        <td>{props.item.todo}</td>
        {
            !props.item.isDone
                ?<td><button className = "btn btn-primary">done</button></td>
                :<>
                 <td><button className = "btn btn-secondary">todo</button></td>
                 <td><button className = "btn btn-danger">delete</button></td>
                 </>
        }
    </tr>
);

export default Container;