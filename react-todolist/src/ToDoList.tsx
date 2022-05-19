import React, { useState } from "react";
import { useForm } from "react-hook-form";


// react-hook-form 적용한 회원가입 폼 예시

// 폼에서 필수 값이 아닌 것들에는 ? 붙이기
// interface IForm {
//     email: string;
//     firstName: string;
//     lastName: string;
//     username: string;
//     password: string;
//     passwordChk: string;
//     extraErr?: string; // 서버에러같은 공통 에러인 경우 여기로 처리함
// }

// function ToDoList() {

//     const {register, handleSubmit, formState: {errors}, setError} = useForm<IForm>({
//         defaultValues: {
//             email: '@naver.com',
//         }
//     });
//     const onValid = (data: IForm) => {
//         // console.log(data);
//         if (data.password !== data.passwordChk) {
//             setError('passwordChk', {message: 'Password are not the same'}, {shouldFocus: true});
//         }
//         console.log(data);
//         // setError('extraErr', {message: 'Server offline'});
//     };
//     console.log(errors);

//     return (
//         <div>
//             <form style={{display: "flex", flexDirection: 'column'}} onSubmit={handleSubmit(onValid)}>
//                 <input
//                     {...register('email', {
//                         required: "Email is required",
//                         pattern: { // 정규식을 사용한 검증이 필요할 때
//                             value: /^[A-Za-z0-9._%+-]+@naver.com$/,
//                             message: 'Only naver.com emails allowed!'
//                         },
//                     })}
//                     placeholder="email"
//                 />
//                 <span>{errors?.email?.message}</span>
//                 <input
//                     {...register('firstName', {
//                         required: "FirstName is required",
//                         // validate: (value) => !value.includes('admin') // 에러메세지 안 넣을 경우
//                         // validate: (value) => value.includes('admin') ? "no admin allowed" : true, // 직접만든 규칙으로 검사하는 방법
//                         validate: { // 직접만든 규칙으로 검사하는 방법(여러 조건 적용)
//                             noAdmin: (value) => value.includes('admin') ? "no admin allowed" : true,
//                             noUser: (value) => value.includes('user') ? "no user allowed" : true
//                         },
//                         // validate()를 async로 비동기로 만들어 서버에 확인하고 응답 받을 수 있음
//                     })}
//                     placeholder="firstName"
//                 />
//                 <span>{errors?.firstName?.message}</span>
//                 <input {...register('lastName', {required: "LastName is required"})} placeholder="lastName" />
//                 <span>{errors?.lastName?.message}</span>
//                 <input {...register('username', {required: "Username is required", minLength: {value:10, message: 'Your username is too short'}})} placeholder="username" />
//                 <span>{errors?.username?.message}</span>
//                 <input {...register('password', {required: "Password is required", minLength: {value: 5, message: 'Your password is too short.'}})} placeholder="password" />
//                 <span>{errors?.password?.message}</span>
//                 <input {...register('passwordChk', {required: "PasswordChk is required", minLength: {value: 5, message: 'Your passwordChk is too short.'}})} placeholder="passwordChk" />
//                 <span>{errors?.passwordChk?.message}</span>
//                 <button>Add</button>
//                 <span>{errors?.extraErr?.message}</span>
//             </form>
//         </div>
//     );
// }


// real ToDoList()
interface IForm {
    toDo: string;
}

function ToDoList() {

    const {register, handleSubmit, setValue} = useForm<IForm>();
    const handleValid = (frmData: IForm) => {
        console.log('add to do',frmData.toDo);
        setValue('toDo',""); // 값이 유효하다면 input을 초기화시킴
    };

    return (
        <div>
            <form onSubmit={handleSubmit(handleValid)}>
                <input
                    {...register('toDo', {
                        required: 'Please write a To Do'
                    })}
                    placeholder="Write a to do"
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default ToDoList;