import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

const toDoState = atom<IToDo[]>({
    key: 'toDo',
    default: []
});

interface IForm {
    toDo: string;
}
interface IToDo {
    text: string;
    id: number;
    category: 'TO_DO' | "DOING" | 'DONE';
}

function ToDoList() {

    // const value = useRecoilValue(toDoState);
    // const modFn = useSetRecoilState(toDoState);
    // 위의 두 함수가 자주 쓰이므로 하나로 합침
    const [toDos, setToDos] = useRecoilState(toDoState);

    const {register, handleSubmit, setValue} = useForm<IForm>();
    const handleValid = ({toDo}: IForm) => {
        setToDos(oldToDos => [{text: toDo, id: Date.now(), category: 'TO_DO'}, ...oldToDos])
        setValue('toDo',""); // 값이 유효하다면 input을 초기화시킴
    };
    console.log(toDos);

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register('toDo', {
                        required: 'Please write a To Do'
                    })}
                    placeholder="Write a to do"
                />
                <button>Add</button>
            </form>
            <ul>
                {toDos.map((toDo) => <li key={toDo.id}>{toDo.text}</li>)}
            </ul>
        </div>
    );
}

export default ToDoList;