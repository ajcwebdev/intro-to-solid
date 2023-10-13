import { createResource } from 'solid-js'

const fetchUser = async () => (
  await fetch(`https://jsonplaceholder.typicode.com/users?_limit=5`)
).json()

export default function Users() {
  const [user] = createResource(fetchUser)

  return (
    <div>
      <span>{user.loading && 'Loading...'}</span>
      <pre>{JSON.stringify(user(), null, 2)}</pre>
    </div>
  )
}