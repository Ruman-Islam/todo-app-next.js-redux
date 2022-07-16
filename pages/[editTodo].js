import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { updateTodo } from '../redux/todoSlice';
import { useRouter } from 'next/router'

const EditTodo = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onTouched' });
    const todos = useSelector((state) => state.todoReducer.todos);
    const { query: { id }, push } = useRouter();
    const [todo, setTodo] = useState({});
    const dispatch = useDispatch();

    useEffect(() => {
        const existingTodo = todos.find(todo => todo.id === +id);
        setTodo(existingTodo);
    }, [id, todos])

    // handle submit 
    const onSubmit = async (data) => {
        const updatedTodo = { ...data, id: id };
        dispatch(updateTodo(updatedTodo));
        reset();
        push('/show-todo');
    };
    return (
        <div className='todo-container'>
            <div>
                <div className='todo-body p-5 bg-light'>
                    <div className='border-bottom'>
                        <h6 style={{ textAlign: 'left' }}>Update todo</h6>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className='input-container'>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control" defaultValue={todo?.title}
                                placeholder="Title"
                                {...register("title", {
                                    required: {
                                        value: true,
                                        message: 'Title is required'
                                    }
                                })} />
                        </div>
                        <label className='text-danger'>
                            {errors.title?.type === 'required' && errors.title?.message}
                        </label>
                        <>
                            <textarea rows={4} type="text" className="form-control" defaultValue={todo?.description}
                                placeholder="What needs to be done?"
                                {...register("description", {
                                    required: {
                                        value: true,
                                        message: 'Description is required'
                                    }
                                })} />
                            <label style={{ textAlign: 'left' }} className='text-danger'>
                                {errors.description?.type === 'required' && errors.description?.message}
                            </label>
                        </>
                        <button type='submit' className="input-group-text" id="basic-addon2">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditTodo;