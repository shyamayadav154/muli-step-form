import { create } from "zustand";



const addOnsOptions = [
  {
    id: 1,
    title: "Online service",
    price: 1,
    desc: "Access to multiplayer games ",
    isChecked: false,
  },
  {
    id: 2,
    title: "Large storage",
    price: 2,
    desc: "Extra storage for your games and apps",
    isChecked: false,
  },

  {
    id: 3,
    title: "Customizable Profile",
    price: 10,
    desc: "Customize your profile with your own picture",
    isChecked: false,
  },
]

export interface MultiStepFormState {
  yourInfo: {
    name: string
    email: string
    phone: string
  }
  selectPlan: {
    plan: {
      title: string
      price: number
      id: number
    }
    isYearly: boolean
  }
  addOns: {
    id: number
    title: string
    price: number
    desc: string
    isChecked: boolean
  }[]
  setYourInfo: (yourInfo: MultiStepFormState["yourInfo"]) => void
  setSelectPlan: (selectPlan: MultiStepFormState["selectPlan"]) => void
  setAddOns: (addOns: MultiStepFormState["addOns"]) => void
}

export const useMultiStepFormStore = create<MultiStepFormState>((set) => ({
  yourInfo: {
    name: "",
    email: "",
    phone: "",
  },
  selectPlan: {
    plan: {
      id: 1,
      title: "Arcade",
      price: 9.99,
    },
    isYearly: true,
  },

  addOns: addOnsOptions,
  setYourInfo: (yourInfo) => set((state) => ({ ...state, yourInfo })),
  setSelectPlan: (selectPlan) => set((state) => ({ ...state, selectPlan })),
  setAddOns: (addOns) => set((state) => ({ ...state, addOns })),
}))