import { create } from 'zustand'

interface BearState {
  step: number
  setStep: (x: number) => void
}

export const useStepper = create<BearState>()((set) => ({
  step: 1,
  setStep: (x) => set((state) => ({ step: x })),
}))


interface USERSTEPS {
  step: number
  stepsNumber:number
  setStep: (x: number) => void
  nextStep:()=>void
  prevStep:()=>void
  
}

export const useUserSteps = create<USERSTEPS>()((set) => ({
  step: 1,
  stepsNumber:5,
  setStep: (x) => set((state) => ({ step: x })),
  nextStep: () => set(({step ,stepsNumber}) => ({ step : step++ })),
  prevStep: () => set(({step,stepsNumber}) => ({ step: step--  })),
}))




interface UserPreferances {
  calories: number  
  protein:number   
  categorie:string
  size:number 
  setCalories: (x: number) => void
  setProtein: (x: number) => void
  setSategorie: (x: string) => void
  setSize: (x: number) => void
}

 export const useUserPreferances = create<UserPreferances>()((set) => ({
    calories: 0,
  protein:0,
  categorie:'',
  size:0,
  setCalories: (x) => set(() => ({ calories: x })),
  setProtein: (x) => set(() => ({ protein: x })),
  setSategorie: (x) => set(() => ({ categorie: x })),
  setSize: (x) => set(() => ({ size: x })),
})) 