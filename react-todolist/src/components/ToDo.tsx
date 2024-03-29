import React from "react";
import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({text, category, id}: IToDo) {

    // 하나의 클릭이벤트 함수로 여러 이벤트 처리하기 1. 익명함수의 인자값 사용하기
    // const onClick = (newCategory: IToDo['category']) => {
    //     console.log('i wanna to ', newCategory);
    // };
    
    // 하나의 클릭이벤트 함수로 여러 이벤트 처리하기 2. 태그 네임 활용하기
    const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.currentTarget.name; // 기본
        const {
            currentTarget: {name},
        } = e; // 섹시버전
        // console.log('i wanna to ', name);
        setToDos((oldToDos) => {
            const todoIdx = oldToDos.findIndex((toDo) => toDo.id === id); // 수정할 리스트의 인덱스 찾기
            const newToDo = {text, id, category: name as any};
            return [...oldToDos.slice(0, todoIdx), newToDo, ...oldToDos.slice(todoIdx+1)];
        });
    };

    // 수정기능 추가
    const setToDos = useSetRecoilState(toDoState);

    return (
        <li>
            <span>{text}</span>
            {/* 이벤트에 실행될 함수에 인자값을 받으려면 화살표 함수를 사용해야한다 */}
            {/* 하나의 클릭이벤트 함수로 여러 이벤트 처리하기 1. 익명함수의 인자값 사용하기 */}
            {/* {category !== 'DOING' && <button onClick={() => onClick('DOING')}>Doing</button>}
            {category !== 'TO_DO' && <button onClick={() => onClick('TO_DO')}>To Do</button>}
            {category !== 'DONE' && <button onClick={() => onClick('DONE')}>Done</button>} */}

            {/* 하나의 클릭이벤트 함수로 여러 이벤트 처리하기 2. 태그 네임 활용하기 */}
            {category !== Categories.DOING && <button name={Categories.DOING} onClick={onClick}>Doing</button>}
            {category !== Categories.TO_DO && <button name={Categories.TO_DO} onClick={onClick}>To Do</button>}
            {category !== Categories.DONE && <button name={Categories.DONE} onClick={onClick}>Done</button>}
        </li>
    );
}

export default ToDo;