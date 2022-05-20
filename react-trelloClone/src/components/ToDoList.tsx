import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { Categories, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import ToDo from "./ToDo";

function ToDoList() {

    // const [toDo, doing, done] = useRecoilValue(toDoSelector);
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const onInput = (e: React.FormEvent<HTMLSelectElement>) => {
        setCategory(e.currentTarget.value as any); // as any를 나중에 수정한다함
    };
    console.log(toDos);

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            {/* <form action=""> */}
                <select value={category} onInput={onInput}>
                    <option value={Categories.TO_DO}>To Do</option>
                    <option value={Categories.DOING}>Doing</option>
                    <option value={Categories.DONE}>Done</option>
                </select>
            {/* </form> */}
            <CreateToDo />
            {/* <h2>To Do</h2>
            <ul>
                {toDo.map (
                    // (toDo) => <ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
                    (toDo) => <ToDo key={toDo.id} {...toDo} />
                )}
            </ul>
            <hr />
            <h2>Doing</h2>
            <ul>
                {doing.map ((toDo) => <ToDo key={toDo.id} {...toDo} />)}
            </ul>
            <hr />
            <h2>Done</h2>
            <ul>
                {done.map ((toDo) => <ToDo key={toDo.id} {...toDo} />)}
            </ul>
            <hr /> */}
            {toDos?.map((todo) => (
                <ToDo key={todo.id} {...todo} />
            ))}
        </div>
    );
}

export default ToDoList;