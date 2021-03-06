import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/todoSlice';
import { useRouter } from 'next/router'

const AddTodo = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { register, handleSubmit, reset, formState: { errors } } = useForm({ mode: 'onTouched' });

    // handle submit 
    const onSubmit = async (data) => {
        dispatch(addTodo(data));
        reset();
        router.push('/show-todo');
    };

    return (
        <div className='todo-container'>
            <div>
                <div className='todo-body p-5 bg-light'>
                    <div className='border-bottom'>
                        <h6 style={{ textAlign: 'left' }}>Create a new todo</h6>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className='input-container'>
                        <div className="input-group mt-3">
                            <input type="text" className="form-control"
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
                            <textarea rows={4} type="text" className="form-control"
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
                        <button type='submit' className="input-group-text" id="basic-addon2">Add todo</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddTodo;