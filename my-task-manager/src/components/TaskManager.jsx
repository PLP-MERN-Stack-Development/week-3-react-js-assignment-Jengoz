import { useState, useEffect } from "react";
import { useLocalStorage } from "@/lib/useLocalStorage";
import Card from "@/components/Card";
import Button from "@/components/Button";

const FILTERS = ["All", "Active", "Completed"];

export default function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [taskInput, setTaskInput] = useState("");
  const [filter, setFilter] = useState("All");

  const handleAddTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const toggleTask = (id) => {
    const updated = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "Active") return !task.completed;
    if (filter === "Completed") return task.completed;
    return true;
  });

  return (
    <Card className="w-full max-w-2xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center">Task Manager</h2>

      {/* Input Field */}
      <div className="flex gap-2">
        <input
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="flex-grow px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter a new task"
        />
        <Button onClick={handleAddTask}>Add</Button>
      </div>

      {/* Filter Buttons */}
      <div className="flex justify-center gap-4">
        {FILTERS.map((f) => (
          <Button
            key={f}
            variant={filter === f ? "primary" : "secondary"}
            onClick={() => setFilter(f)}
          >
            {f}
          </Button>
        ))}
      </div>

      {/* Task List */}
      <ul className="space-y-2">
        {filteredTasks.map((task) => (
          <li
            key={task.id}
            className={`flex justify-between items-center p-3 border rounded ${
              task.completed ? "bg-green-100 dark:bg-green-900" : ""
            }`}
          >
            <span
              onClick={() => toggleTask(task.id)}
              className={`cursor-pointer flex-grow ${
                task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {task.text}
            </span>
            <Button variant="danger" onClick={() => deleteTask(task.id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
    </Card>
  );
}
