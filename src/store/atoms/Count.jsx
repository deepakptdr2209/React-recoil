import {atom, selector} from "recoil"

 export const countAtom = atom({
    // keys should be unique in each atom make sure that there is no conflict 
    key : "countAtom",
    default : 0
})

export const evenSelector = selector({
    key : "evenSelector",
    get : ({get})=>{
        const count = get(countAtom);
        return count % 2 ;
    }
})