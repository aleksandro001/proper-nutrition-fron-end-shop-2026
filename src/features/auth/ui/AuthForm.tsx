'use client'

interface Props {
  type: 'login' | 'register'
}
export function AuthForm({ type }: Props) {
  return (
    <div>
      <h1>{type === 'login' ? 'Login' : 'Register'}</h1>
      <form>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <button>{type === 'login' ? 'Login' : 'Register'}</button>
      </form>
    </div>
  )
}
