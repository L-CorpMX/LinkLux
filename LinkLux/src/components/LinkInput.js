import { useState } from 'react';

const LinkInput = ({ onAddLink }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onAddLink(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Pega tus enlaces aquí (formato: nombre|url)"
          className="w-full p-4 bg-gray-900 bg-opacity-50 border border-gray-700 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          rows={4}
        />
        <button
          type="submit"
          className="absolute right-4 bottom-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Agregar
        </button>
      </div>
    </form>
  );
};

export default LinkInput;

// DONE