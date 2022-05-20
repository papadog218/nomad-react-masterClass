import { atom, selector } from "recoil";

// type categories = 'TO_DO' | "DOING" | 'DONE'; // 이 파일안에서 동일하게 쓸 때
// 현재 위의 타입들을 다른파일에서도 동일하게 사용해야하는 상황이라 enum 을 사용함
// 오타를 방지하는 방법임
export enum Categories {
    // 'TO_DO',
    // 'DOING',
    // 'DONE',
    // enum은 기본적으로 숫자값을 반환함 반환될 타입은 = 을 사용해서 설정가능함
    'TO_DO' = 'TO_DO',
    'DOING' = 'DOING',
    'DONE' = 'DONE',
}

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
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
        const toDos = get(toDoState);
        const category = get(categoryState);
        return toDos.filter((todo) => todo.category === category);
    }
});

// 사용자가 선택한 카테고리만 보이게 하기
export const categoryState = atom<Categories>({
    key: 'category',
    default: Categories.TO_DO,
})