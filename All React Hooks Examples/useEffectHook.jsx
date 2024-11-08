import React, { useEffect, useState } from "react";

export default function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [completedTodoCount, setCompleteTodoCount] = useState(0);

  // Initialized - called once when component is created
  useEffect(() => {
    // Network request to get data
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((data) => setTodoList(data));

    const chatApi = new ChatApi();
    chatApi.joinChat();

    // Unmounted or removed - called once when component is removed
    return () => {
      // This will run when component is unmounted
      chatApi.leaveChat();
    };
  }, []);
  

  // State Updates - called many times
  useEffect(()=>{
     setCompleteTodoCount(todoList.filter((x) => x.complete).length);
     // calls whenever the todalist get changed
  },[todoList])

  return <div>{todoList}</div>;
}
