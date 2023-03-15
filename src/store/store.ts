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
  scan:boolean
  setStep:(x:number)=>void
  setDecodedCode:(x:string)=>void
  setScan:(x:boolean)=>void
}

export const useBarMan=create<BarMan>()((set)=>({
  step:1,
  decodedCode:'',
  scan:false,
  setStep:(x)=>set(()=>({step:x})),
  setDecodedCode:(x)=>set(()=>({decodedCode:x})),
  setScan:(x)=>set(()=>({scan:x})),

}))



interface Admin{
  currentTab:string,
  category:string,
  setTab:(x:string)=>void,
  setCategory:(x:string)=>void,
}

export const useAdmin=create<Admin>()((set)=>({
  currentTab:'ingredients',
  category:'Frozen Yogurt',
  setTab:(x)=>set(()=>({currentTab:x})),
  setCategory:(x)=>set(()=>({category:x})),
}))