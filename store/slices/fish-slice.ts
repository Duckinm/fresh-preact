import { StateCreator } from 'zustand'
import { StoreState } from '../use-store.ts'

export interface FishSlice {
  fishes: number
  addFish: () => void
}
export const createFishSlice: StateCreator<StoreState, [], [], FishSlice> = (set) => ({
  fishes: 0,
  addFish: () => set((state) => ({ fishes: state.fishes + 1 })),
})
