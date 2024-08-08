import { FC } from 'react'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

import amaLogo from '../assets/ama-logo.svg'

export const CreateRoom: FC = () => {
  const navigate = useNavigate()
  const handleCreateRoom = (data: FormData) => {
    const theme = data.get('theme')?.toString()
    console.log('ee', theme)
    navigate('/room/i1jo2i3jo12ji3')
  }

  return (
    <main className="h-screen flex items-center justify-center px-4">
      <div className="max-w-[450px] flex flex-col gap-6">
        <img src={amaLogo} alt="AMA" className="h-10" />
        <p className="leading-relaxed text-zinc-300 text-center">
          Create a public AMA (Ask Me Anything) room and prioritize the most
          important questions for the community.
        </p>

        <form
          action={handleCreateRoom}
          className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1"
        >
          <input
            type="text"
            name="theme"
            placeholder="Room name"
            autoComplete="off"
            className="flex-1 text-sm bg-transparent mx-2 outline-none placeholder:text-zinc-500 text-zinc-100"
          />
          <button
            type="submit"
            className="bg-orange-400 text-orange-950 flex items-center px-3 py-1.5 gap-1.5 rounded-lg font-medium text-sm hover:bg-orange-500 transition-colors"
          >
            Create Room <ArrowRight className="size-4" />
          </button>
        </form>
      </div>
    </main>
  )
}
