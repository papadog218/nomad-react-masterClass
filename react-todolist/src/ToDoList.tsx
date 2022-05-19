import React, { useState } from "react";
import { useForm } from "react-hook-form";

// 리액트-훅-폼 으로 변경하는거 보여준다고 주석처리함
// function ToDoList() {

//     const [toDo, setToDo] = useState('');
//     const [toDoErr, setToDoErr] = useState('');
//     const onChange = ((e: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: {value},
//         } = e;
//         setToDoErr('');
//         setToDo(value);
//     });
//     const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         console.log(toDo.length);
//         if (toDo.length > 10) {
//             return setToDoErr('To do should be longer');
//         }
//         console.log('Submit');
//     };

//     return (
//         <div>
//             <form onSubmit={onSubmit}>
//                 <input onChange={onChange} value={toDo} placeholder="Write a to do" />
//                 <button>Add</button>
//                 {toDoErr !== '' ? toDoErr : null}
//             </form>
//         </div>
//     );
// };

// react-hook-form 적용함
function ToDoList() {

    const {register, watch} = useForm();
    console.log(watch());

    return (
        <div>
            <form>
                <input {...register('email')} placeholder="email" />
                <input {...register('firstName')} placeholder="firstName" />
                <input {...register('lastName')} placeholder="lastName" />
                <input {...register('username')} placeholder="username" />
                <input {...register('password')} placeholder="password" />
                <input {...register('passwordChk')} placeholder="passwordChk" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;