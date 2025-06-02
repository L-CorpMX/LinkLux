import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebase';  // Importa la configuración de Firebase

import LinkInput from './components/LinkInput';
import LinkGrid from './components/LinkGrid';

const App = () => {
  const [links, setLinks] = useState([]);

  // Función para cargar los enlaces desde Firestore
  const fetchLinks = async () => {
    const querySnapshot = await getDocs(collection(db, "links"));
    const linksData = [];
    querySnapshot.forEach((doc) => {
      linksData.push({ id: doc.id, ...doc.data() });
    });
    setLinks(linksData);
  };

  useEffect(() => {
    fetchLinks();
  }, []);

  // Añadir link a Firestore
  const addLink = async (input) => {
    const [name, url] = input.split('|').map(item => item.trim());
    if (name && url) {
      const docRef = await addDoc(collection(db, "links"), { name, url });
      setLinks([...links, { id: docRef.id, name, url }]);
    }
  };

  // Eliminar link de Firestore
  const deleteLink = async (id) => {
    await deleteDoc(doc(db, "links", id));
    setLinks(links.filter(link => link.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6 md:p-10">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            LinkLux
          </h1>
          <p className="text-gray-400 mt-2">Tu colección premium de enlaces</p>
        </header>

        <main>
          <LinkInput onAddLink={addLink} />
          {links.length > 0 ? (
            <LinkGrid links={links} onDeleteLink={(index) => deleteLink(index)} />
          ) : (
            <div className="text-center py-12 text-gray-500">
              <p>No hay enlaces guardados aún</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default App;
