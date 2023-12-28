import { create } from 'zustand'

interface SortStore {
  currentSort: string
  setSort: (state: string) => void
}

export const sortStore = create<SortStore>((set) => ({
  currentSort: '',
  setSort: (param: string) => {
    set(() => ({
      currentSort: param
    }))
  }
}))