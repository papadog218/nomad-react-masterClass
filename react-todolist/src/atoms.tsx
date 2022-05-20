import { atom, selector } from "recoil";

export interface IToDo {
    text: string;
    id: number;
    category: 'TO_DO' | "DOING" | 'DONE';
}

export const toDoState = atom<IToDo[]>({
    key: 'toDo',
    default: []
});

/*
    recoil - selector
    셀렉터는 derived state(파생된 스테이트?) 를 나타낸다
    derived state 란? : state를 입력 받아서 그걸 변형해 반환하는 순수함수?를 거쳐 반환된 값을 말한다
    지금은 카테고리에 상관없이 toDoState의 배열에 모든 todo들을 담고 있음
    이걸 셀렉터를 이용해 todo들을 분류하는 것을 한다
    * 정리 : selector는 atom의 output을 변형시키는 도구이다 atom은 단순 배열만 주지만 그 output을 변형시키는 것은 selector 이다
*/
export const toDoSelector = selector({
    key: 'toDoSelector',
    get: ({get}) => {
        const toDos = get(toDoState)
        return [
            toDos.filter((todo) => todo.category === "TO_DO"),
            toDos.filter((todo) => todo.category === "DOING"),
            toDos.filter((todo) => todo.category === "DONE"),
        ]; // [[{},{}]] 이런 모습으로 리턴된다함
    }
});