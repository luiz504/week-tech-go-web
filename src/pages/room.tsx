import { FC } from 'react'
import { useParams } from 'react-router-dom'

export const Room: FC = () => {
  const { roomId } = useParams()
  return <div>Room - {roomId} </div>
}
