import { useEffect, useState } from 'react'

export const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  // pointer move
  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event
      setPosition({ x: clientX, y: clientY })
      console.log('position', position, { x: clientX, y: clientY })
    }
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }

    // Limpiar suscripciones
    return () => {
      console.log('cleanup')
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  // [] -> solo se ejecuta una vez cuando se monta el componente
  // [enabled] -> se ejecuta cuando cambia enabled y cuando se monta el componente
  // undefined -> se ejecuta cada vez que se renderiza el componente

  // change body className
  useEffect(() => {
    document.body.classList.toggle('no-cursor', enabled)

    return () => {
      document.body.classList.remove('no-cursor')
    }
  }, [enabled])

  return (
    <div className='h-[20rem] flex justify-center items-center'>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      {/* <div className={`absolute bg-blue-300 border-2 border-gray-700 border-xl opacity-100 pointer-events-none left-[-20px] top-[-25px] w-[50px] h-[50px] transform translate-x-[${position.x}px] translate-y-[${position.y}px]`} /> */}

      <button
        className='bg-blue-800 text-white p-7 h-10 flex items-center'
        onClick={() => setEnabled(!enabled)}
      >
        {enabled ? 'Desactivar' : 'Activar'} seguir puntero
      </button>
    </div>
  )
}
