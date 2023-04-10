import { useState } from 'react';

export const Modal = ({ msgText, msgButton, className, handleRestart}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    toggleModal()
    handleRestart()
  }

  return (
    <>
      {
        isOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
          <div className="absolute bg-white w-1/4 rounded-lg shadow-lg">
            <div className="flex flex-col p-8 text-center">
              {/* <p className="text-lg font-bold mb-2">Texto centrado</p> */}
              <div className={`mt-3 bg-red mb-7 text-4xl font-bold ${ className }`}>{ msgText }</div>
              <button
                onClick={ handleClick }
                className="mt-3 bg-blue-300 hover:bg-blue-400 text-gray-800 font-bold py-2 px-4 rounded-full"
              >
                { msgButton}
              </button>
            </div>
          </div>
        </div>
      )
      }
    </>
  );
}


