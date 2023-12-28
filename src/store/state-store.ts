import { create } from 'zustand'

interface StateStore {
  currentState: string
  setState: (state: string) => void
}

export const stateStore = create<StateStore>((set) => ({
  currentState: '',
  setState: (param: string) => {
    set(() => ({
      currentState: param
    }))
  }
}))