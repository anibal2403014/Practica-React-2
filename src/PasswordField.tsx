import { useState } from 'react'

export default function PasswordField() {
  const [show, setShow] = useState(false)

  return (
    <div className="w-full">
      <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
        Contraseña
      </label>

      <div className="relative">
        <input
          id="password"
          type={show ? 'text' : 'password'}
          className="w-full px-4 py-3 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300 transition-all duration-200"
          placeholder="Contraseña"
        />

        <button
          type="button"
          onClick={() => setShow(s => !s)}
          aria-pressed={show}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
        >
          {show ? 'Ocultar contraseña' : 'Mostrar contraseña'}
        </button>
      </div>
    </div>
  )
}
