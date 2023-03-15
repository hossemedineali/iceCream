import { create } from 'zustand'



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
  setCategorie: (x: string) => void
  setSize: (x: number) => void
}

 export const useUserPreferances = create<UserPreferances>()((set) => ({
    calories: 0,
  protein:0,
  categorie:'',
  size:0,
  setCalories: (x) => set(() => ({ calories: x })),
  setProtein: (x) => set(() => ({ protein: x })),
  setCategorie: (x) => set(() => ({ categorie: x })),
  setSize: (x) => set(() => ({ size: x })),
})) 


interface QrCode{
  url:string
  setUrl:(x:string)=>void
}

export const useQrCode=create<QrCode>()((set)=>({
  url:'',
  setUrl:(x)=>set(()=>({url:x}))
}))



interface BarMan{
  step:number
  decodedCode:string
  setStep:(x:number)=>void
  setDecodedCode:(x:string)=>void
}

export const useBarMan=create<BarMan>()((set)=>({
  step:1,
  decodedCode:'',
  setStep:(x)=>set(()=>({step:x})),
  setDecodedCode:(x)=>set(()=>({decodedCode:x})),
}))