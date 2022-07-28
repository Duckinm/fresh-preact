/** @jsx h */
import { IS_BROWSER } from '$fresh/runtime.ts'
import { h } from 'preact'
import { useStore } from '../store/use-store.ts'

export default function BearAndFish() {
  const { fishes, bears, addBear, addFish, setBear } = useStore()

  return (
    <div class="flex gap-2 w-full">
      <button onClick={() => setBear(10)} disabled={!IS_BROWSER}>
        Set Bear
      </button>
      <button onClick={addBear} disabled={!IS_BROWSER}>
        Add Bear
      </button>
      <button onClick={addFish} disabled={!IS_BROWSER}>
        Add Fish
      </button>

      <p>Bear: {bears}</p>
      <p>Fishes: {fishes}</p>
    </div>
  )
}
