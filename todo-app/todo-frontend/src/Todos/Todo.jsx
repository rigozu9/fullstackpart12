const Todo = ({ todo, onDelete, onComplete }) => {
  return (
    <div>
      <span>{todo.text}</span>
      <span>
        <span>{todo.done ? ' This todo is done' : ' This todo is not done'}</span>
        <button onClick={onDelete}> Delete </button>
        {!todo.done && <button onClick={onComplete}> Set as done </button>}
      </span>
    </div>
  )
}

export default Todo
