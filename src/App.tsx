import PasswordField from './PasswordField'

export default function App() {
  return (
    <div className="min-h-dvh flex items-start justify-center p-10">
      <div className="w-full max-w-md bg-white rounded-lg shadow-sm p-8">
        <h1 className="text-2xl font-semibold text-gray-900 mb-6">Campo de contraseña</h1>
        <PasswordField />
      </div>
    </div>
  )
}
