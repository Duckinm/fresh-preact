/** @jsx h */
import { IS_BROWSER } from '$fresh/runtime.ts'
import { h } from 'preact'
import { useState } from 'preact/hooks'
import { runFireworks } from '../utils/fireworks.ts'

interface CounterProps {
  start: number
}

export default function Counter({ start }: CounterProps) {
  const [count, setCount] = useState(start)

  const handleCounter = (type: 'increment' | 'decrement') => () => {
    if (type === 'increment') {
      setCount(count + 1)
    }

    if (type === 'decrement') {
      setCount(count - 1)
    }

    runFireworks()
  }

  return (
    <div class="flex gap-2 w-full">
      <p class="flex-grow-1 font-bold text-xl">{count}</p>
      <button
        class="px-2 py-1 bg-gray-100 hover:bg-gray-200"
        onClick={handleCounter('decrement')}
        disabled={!IS_BROWSER}
      >
        -1
      </button>
      <button
        class="px-2 py-1 bg-gray-100 hover:bg-gray-200"
        onClick={handleCounter('increment')}
        disabled={!IS_BROWSER}
      >
        +1
      </button>
    </div>
  )
}
