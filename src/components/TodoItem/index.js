// Write your code here
import './index.css'
const TodoItem = props => {
  const {todoList, onDeleteItem} = props
  const {id, title} = todoList
  const onDeleteroy = () => {
    onDeleteItem(id)
  }
  return (
    <li className="roy">
      <p>{title}</p>
      <button onClick={onDeleteroy}>Delete</button>
    </li>
  )
}
export default TodoItem
