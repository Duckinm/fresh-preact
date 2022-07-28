import create from 'zustand'
import { BearSlice, createBearSlice } from './slices/bear-slice.ts'
import { createFishSlice, FishSlice } from './slices/fish-slice.ts'

export type StoreState = BearSlice & FishSlice

export const useStore = create<StoreState>()((...a) => ({
  ...createBearSlice(...a),
  ...createFishSlice(...a),
}))
