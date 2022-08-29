import { createSlice } from "@reduxjs/toolkit";
import wordsData from "./words.json"

const wordLimit= 40;

const getWords = (arr, num) => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  const newWords = shuffled.slice(0, num);
  return newWords.map((word) => ({ ...word, status:"" }));
};

export const speedSlice=createSlice({

    name:"speed",
    initialState:{
        items:getWords(wordsData, wordLimit),
        language:"TR",
        key:0,
        correct:0,
        correctLetters:0,
        incorrect:0,
        time:null, 
    },
    reducers:{
        compareWords:(state, action)=>{
            const {id, name}=action.payload
            const newName=name.split("").slice(0, name.length-1).join("");
            if(newName===state.items[id].turkish){
                state.items[id].status="success"
                state.correct+=1
                state.correctLetters+=newName.length
               
            }
            else if(newName!==state.items[id].turkish){
                state.items[id].status="failed"
                state.incorrect+=1
            }
           
        },
        counter:(state, action)=>{
            state.time=action.payload;
        },
        keyNumber:(state)=>{
            state.key+=1
        },
        changeLanguage:(state)=>{
            state.language==="TR" ? state.language="ENG" : state.language="TR"
        }
        
    },
   
})
export const {compareWords, counter, keyNumber, changeLanguage}=speedSlice.actions;
export default speedSlice.reducer;