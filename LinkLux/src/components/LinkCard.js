import { useState } from 'react';

const LinkCard = ({ name, url, onDelete }) => {
  const [showModal, setShowModal] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleDelete = () => {
    if (password === '3366') {
      onDelete();
      setShowModal(false);
      setPassword('');
      setError('');
    } else {
      setError('Contraseña incorrecta');
    }
  };

  return (
    <>
      <div className="group relative bg-gray-800 bg-opacity-60 backdrop-blur-md rounded-xl p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
            <a 
              href={url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 break-all"
            >
              {url}
            </a>
          </div>
          <button
            onClick={() => setShowModal(true)}
            className="text-gray-400 hover:text-red-400 transition-colors"
            aria-label="Eliminar enlace"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal de confirmación */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-800 rounded-xl p-6 max-w-md w-full border border-gray-700">
            <h3 className="text-xl font-semibold text-white mb-4">Confirmar eliminación</h3>
            <p className="text-gray-300 mb-4">Ingresa la contraseña para eliminar este enlace:</p>
            
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 bg-gray-700 rounded-lg text-white mb-2"
              placeholder="Contraseña"
            />
            
            {error && <p className="text-red-400 text-sm mb-4">{error}</p>}
            
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setPassword('');
                  setError('');
                }}
                className="px-4 py-2 text-gray-300 hover:text-white"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LinkCard;

// DONE