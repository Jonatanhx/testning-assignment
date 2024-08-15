import { ChangeEvent, FormEvent, useState } from "react";

interface TodoFormData {
  title: string;
  description: string;
  date: string;
}

interface AddTodoFormProps {
  onSubmit: (data: TodoFormData) => void;
}

export default function AddTodoForm({ onSubmit }: AddTodoFormProps) {
  const [formData, setFormData] = useState<TodoFormData>({
    title: "",
    description: "",
    date: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      title: "",
      description: "",
      date: "",
    });
  };

  return (
    <form
      className="border border-black inline-flex flex-col bg-neutral-300 p-2"
      onSubmit={handleSubmit}
    >
      <label className="mb-4">
        <p className="text-lg border-b border-neutral-700">Add a to do:</p>
      </label>
      <label>
        <h2>Title:</h2>
      </label>
      <input
        placeholder="Title"
        required
        type="text"
        name="title"
        className="border-b border-black"
        value={formData.title}
        onChange={handleChange}
      />
      <label>
        <h2>Description:</h2>
      </label>
      <input
        required
        className="border-b border-black"
        type="text"
        placeholder="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
      />
      <label>
        <h2>Date:</h2>
      </label>
      <input
        required
        placeholder="Date"
        className="border-b border-black"
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-slate-700 rounded-sm mt-4 text-white focus:ring-1"
      >
        Add
      </button>
    </form>
  );
}
