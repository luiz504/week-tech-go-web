import { ArrowUp } from 'lucide-react'
import { FC, useState } from 'react'
type Props = {
  text: string
  amountOfReactions?: number
  answered?: boolean
}
export const Message: FC<Props> = ({
  text,
  amountOfReactions,
  answered = false,
}) => {
  const [hasReacted, setHasReacted] = useState(false)
  const handleReactToMessage = () => {
    setHasReacted(true)
  }

  const handleUnreactToMessage = () => {
    setHasReacted(false)
  }

  return (
    <li
      data-answered={answered}
      className="ml-4 leading-relaxed text-zinc-100 data-[answered=true]:opacity-50 data-[answered=true]:pointer-events-none"
    >
      <p>{text}</p>

      {hasReacted ? (
        <button
          type="button"
          className="mt-3 flex items-center gap-2 text-orange-400 text-sm font-medium hover:text-orange-500 transition-colors"
          onClick={handleUnreactToMessage}
          disabled={answered}
        >
          <ArrowUp className="size-4" />
          Like question ({amountOfReactions})
        </button>
      ) : (
        <button
          type="button"
          className="mt-3 flex items-center gap-2 text-zinc-400 text-sm font-medium hover:text-zinc-300 transition-colors"
          onClick={handleReactToMessage}
          disabled={answered}
        >
          <ArrowUp className="size-4" />
          Like question ({amountOfReactions})
        </button>
      )}
    </li>
  )
}
