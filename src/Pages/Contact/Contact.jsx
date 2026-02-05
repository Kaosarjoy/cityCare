import React, { useState } from "react";

const Contact = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [input, setInput] = useState("");

  // Feedback submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return; // empty input block
    const newFeedback = {
      id: Date.now(), // unique id
      text: input,
    };
    setFeedbacks([newFeedback, ...feedbacks]); // newest on top
    setInput(""); // clear input
  };

  // Delete feedback
  const handleDelete = (id) => {
    setFeedbacks(feedbacks.filter((fb) => fb.id !== id));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us / Feedback</h1>

      {/* Feedback form */}
      <form onSubmit={handleSubmit} className="flex flex-col items-center mb-8">
        <textarea
          className="border border-gray-300 rounded p-2 w-full max-w-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Write your feedback..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={4}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>

      {/* Feedback list */}
      <div className="max-w-md mx-auto space-y-4">
        {feedbacks.length === 0 ? (
          <p className="text-gray-500 text-center">No feedback yet. Be the first!</p>
        ) : (
          feedbacks.map((fb) => (
            <div
              key={fb.id}
              className="flex justify-between items-center bg-gray-100 p-3 rounded shadow-sm"
            >
              <p>{fb.text}</p>
              <button
                onClick={() => handleDelete(fb.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Contact;
