import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
    toDo: string;
}

function CreateToDo() {

    const setToDos = useSetRecoilState(toDoState);

    // 현제 카테고리에 맞는 배열에 리스트 생성하기
    const category = useRecoilValue(categoryState);

    const {register, handleSubmit, setValue} = useForm<IForm>();
    const handleValid = ({toDo}: IForm) => {
        setToDos((oldToDos) => [
            // {text: toDo, id: Date.now(), category: category},
            {text: toDo, id: Date.now(), category}, // 단축문법
            ...oldToDos
        ]);
        setValue('toDo',""); // 값이 유효하다면 input을 초기화시킴
    };

    return (
        <form onSubmit={handleSubmit(handleValid)}>
            <input
                {...register('toDo', {
                    required: 'Please write a To Do'
                })}
                placeholder="Write a to do"
            />
            <button>Add</button>
        </form>
    );
};

export default CreateToDo;