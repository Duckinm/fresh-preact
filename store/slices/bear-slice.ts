import { StateCreator } from 'zustand'
import { StoreState } from '../use-store.ts'

export interface BearSlice {
  bears: number
  addBear: () => void
  eatFish: () => void
  setBear: (add: number) => void
}

export const createBearSlice: StateCreator<StoreState, [], [], BearSlice> = (set) => ({
  bears: 0,
  setBear: (add) => set({ bears: add }),
  addBear: () => set((state) => ({ bears: state.bears + 1 })),
  eatFish: () => set((state) => ({ fishes: state.fishes - 1 })),
})
