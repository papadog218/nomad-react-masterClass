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

    const {register, handleSubmit, formState} = useForm();
    const onValid = (data: any) => {
        console.log(data);
    };
    console.log(formState.errors);

    return (
        <div>
            <form style={{display: "flex", flexDirection: 'column'}} onSubmit={handleSubmit(onValid)}>
                <input {...register('email', {required: "Email is required"})} placeholder="email" />
                <input {...register('firstName', {required: "FirstName is required"})} placeholder="firstName" />
                <input {...register('lastName', {required: "LastName is required"})} placeholder="lastName" />
                <input {...register('username', {required: "Username is required", minLength: 10})} placeholder="username" />
                <input {...register('password', {required: "Password is required", minLength: {value: 5, message: 'Your password is too short.'}})} placeholder="password" />
                <input {...register('passwordChk', {required: "PasswordChk is required", minLength: 5})} placeholder="passwordChk" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;