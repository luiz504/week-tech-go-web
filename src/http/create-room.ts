type Params = {
  theme: string
}
export async function createRoom({ theme }: Params) {
  const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/rooms`, {
    method: 'POST',
    body: JSON.stringify({ theme }),
  })

  if (!response.ok) {
    throw new Error('Failed to create room')
  }

  const data: { id: string } = await response.json()

  return { roomId: data.id }
}
