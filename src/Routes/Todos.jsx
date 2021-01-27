/* The Todos route
The Todos route displays the user’s name and a list of all the to-do items. 
To get all the to-do items, we will use a Hook called useFirestoreConnect, which takes an object as an argument, listens/unlistens to the provided Cloud Firestore path, and makes the data available in our Redux state. We can then access this data from the Redux state with the useSelector Hook.

Because we are listening to a subcollection, we have to use the storeAs property of the object we are passing to our useFirestoreConnect Hook. The object will then have a collection property whose value is the path of the collection we are listening for. The Todos route will also contain the AddTodo component. Below is the code for the Todos route:

 */

 import React from "react";
import { useSelector } from "react-redux";
import AddTodo from "../components/AddTodo";
import { useFirestoreConnect } from "react-redux-firebase";
import ToDoItem from "../components/TodoItem";
const Todos = () => {
  const { displayName, uid } = useSelector((state) => state.firebase.auth);
  useFirestoreConnect({
    collection: `users/${uid}/todos`,
    storeAs: "todos",
  });
  const todos = useSelector((state) => state.firestore.data.todos);
  console.log(todos);
  return (
    <div>
      <h3>Hello {displayName}</h3>
      <h4>Todos</h4>
      <AddTodo />
      <ul
        style={{
          listStyleType: "none",
        }}
      >
        {todos &&
          Object.values(todos).map((todo) => (
            <li>
              <ToDoItem
                title={todo.title}
                isDone={todo.isDone}
                todoID={todo.todoID}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Todos;
