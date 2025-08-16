import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const userStore = create(persist((set) => ({
  name: '',
  updateName: (name: string) => set(() => ({ name: name })),
}),
{
    name: 'userStore'
},
))

export default userStore