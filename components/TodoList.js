import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDeleteLeft, faUndo, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { completeTodo, deleteTodo, unCompleteTodo } from '../redux/todoSlice';

const TodoList = () => {
    const todos = useSelector((state) => state.todoReducer.todos);
    const dispatch = useDispatch();

    return (
        <div className='bg-light p-5 rounded mt-3 w-100'
            style={{ textAlign: 'center' }}>
            <div className='border-bottom'>
                <h6 style={{ textAlign: 'left' }}>Todo List</h6>
            </div>
            <table className="table">
                {todos?.length > 0 &&
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Tile</th>
                            <th scope="col">Description</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>}
                <tbody>
                    {todos?.map(({ id, title, description, completed }, index) =>
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{completed ? <strike>{title}</strike> : <span>{title}</span>}</td>
                            <td>{completed ? <strike>{description}</strike> : <span>{description}</span>}</td>
                            <td className='border'>
                                <span
                                    className='text-success' role='button'>
                                    {completed ?
                                        <span onClick={() => dispatch(unCompleteTodo(id))}>
                                            <FontAwesomeIcon icon={faUndo} className='icon' />
                                        </span>
                                        :
                                        <span onClick={() => dispatch(completeTodo(id))}>
                                            <FontAwesomeIcon icon={faCheckCircle} className='icon' />
                                        </span>}
                                </span>
                                <span
                                    onClick={() => dispatch(deleteTodo(id))}
                                    className='ms-2 text-danger icon' role='button'>
                                    <FontAwesomeIcon icon={faDeleteLeft} className='icon' />
                                </span>
                            </td>
                        </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default TodoList;