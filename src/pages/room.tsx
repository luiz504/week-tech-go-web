import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowRight, Share2 } from 'lucide-react'
import { toast } from 'sonner'

import amaLogo from '../assets/ama-logo.svg'
import { Message } from '../components/message'

const lorem =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, reiciendis quisquam fuga aliquam cum suscipit quaerat aspernatur, nisi earum unde possimus culpa, quod minima. At quis ipsam magnam quod aliquid!'
export const Room: FC = () => {
  const { roomId } = useParams()

  const handleShareRoom = () => {
    const url = window.location.href.toString()

    if (navigator.share !== undefined && navigator.canShare()) {
      navigator.share({ url })
    } else {
      navigator.clipboard.writeText(url)
      toast.info('Room link copied to clipboard')
    }
  }

  return (
    <div className="mx-auto max-w-[640px] flex flex-col gap-6 py-10 px-4">
      <div className="flex items-center gap-3 px-3">
        <img src={amaLogo} alt="AMA" className="h-5" />

        <span className="text-sm text-zinc-500 truncate">
          Room ID: <span className="text-zinc-300">{roomId}</span>
        </span>

        <button
          type="button"
          className="bg-zinc-800 text-zinc-300 flex items-center px-3 py-1.5 gap-1.5 rounded-lg font-medium text-sm hover:bg-zinc-700 transition-colors ml-auto"
          onClick={handleShareRoom}
        >
          Share <Share2 className="size-4" />
        </button>
      </div>

      <div className="h-px w-full bg-zinc-900" />

      <form className="flex items-center gap-2 bg-zinc-900 p-2 rounded-xl border-zinc-800 ring-orange-400 ring-offset-2 ring-offset-zinc-950 focus-within:ring-1">
        <input
          type="text"
          name="theme"
          placeholder="What is your question?"
          autoComplete="off"
          className="flex-1 text-sm bg-transparent mx-2 outline-none placeholder:text-zinc-500 text-zinc-100"
        />
        <button
          type="submit"
          className="bg-orange-400 text-orange-950 flex items-center px-3 py-1.5 gap-1.5 rounded-lg font-medium text-sm hover:bg-orange-500 transition-colors"
        >
          Create Question <ArrowRight className="size-4" />
        </button>
      </form>

      <ol className="list-decimal list-outside px-3 space-y-8">
        <Message text={lorem} amountOfReactions={20} answered />
        <Message text={lorem} amountOfReactions={10} />
        <Message text={lorem} amountOfReactions={30} answered />
      </ol>
    </div>
  )
}
