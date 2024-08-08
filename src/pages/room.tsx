import { FC } from 'react'
import { useParams } from 'react-router-dom'
import amaLogo from '../assets/ama-logo.svg'
import { ArrowRight, ArrowUp, Share2 } from 'lucide-react'
export const Room: FC = () => {
  const { roomId } = useParams()
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
        <li className="ml-4 leading-relaxed text-zinc-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fuga
          ratione, saepe provident ipsum, ullam hic itaque inventore iusto illo
          distinctio delectus eveniet minima sed facilis atque repellendus ad.
          Minima.
          <button
            type="button"
            className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500 transition-colors"
          >
            <ArrowUp className="size-4" />
            Like question (222)
          </button>
        </li>
        <li className="ml-4 leading-relaxed text-zinc-100">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fuga
          ratione, saepe provident ipsum, ullam hic itaque inventore iusto illo
          distinctio delectus eveniet minima sed facilis atque repellendus ad.
          Minima.
          <button
            type="button"
            className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300 transition-colors"
          >
            <ArrowUp className="size-4" />
            Like question (222)
          </button>
        </li>
      </ol>
    </div>
  )
}
