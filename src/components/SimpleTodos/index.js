import {Component} from 'react'
import TodoItem from '../TodoItem'
import './index.css'
const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here
class SimpleTodos extends Component {
  state = {userList: initialTodosList}
  onDelete = id => {
    const {userList} = this.state
    const getResult = userList.filter(eachItem => eachItem.id !== id)
    this.setState({userList: getResult})
  }
  render() {
    const {userList} = this.state
    return (
      <div className="background">
        <div className="balu">
          <h1>Simple Todos</h1>
          <ul>
            {userList.map(eachItem => (
              <TodoItem
                todoList={eachItem}
                onDeleteItem={this.OnDelete}
                key={eachItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default SimpleTodos
