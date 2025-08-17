import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type State = {
  name: string
  hasSavedName: boolean
}

export type Action = {
  updateName: (name: string) => void
  savedName: (state: boolean) => void
  reset: () => void
}

const userStore = create(persist<State & Action>((set) => ({
  name: '',
  hasSavedName: false,
  updateName: (name: string) => set(() => ({ name: name })),
  savedName: (state: boolean) => set(() => ({ hasSavedName: state })),
  reset: () => {
    set({ name: '', hasSavedName: false })
  },
}),
{
    name: 'userStore'
},
))

export default userStore