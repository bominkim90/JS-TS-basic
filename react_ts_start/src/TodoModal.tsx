import type {Todo} from './Todolist';

interface ModalProps {
  modalTodo: Todo | null;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}


function TodoModal(props : ModalProps) {
  const {modalTodo, setShowModal} = props;

  return(
    <div>
        이거 모달임
        <p>{modalTodo?.id}</p>
        <p>{modalTodo?.text}</p>
        <p>{String(modalTodo?.isChecked)}</p>

        <button
          onClick={()=>{setShowModal(false);}}
        >
          모달 닫기
        </button>
    </div>
  )
}

export default TodoModal;