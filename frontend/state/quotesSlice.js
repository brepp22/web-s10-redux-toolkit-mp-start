// ✨ create your `quotesSlice` in this module

import { createSlice } from '@reduxjs/toolkit'

let id = 1
const getNextId = () => id++

export const quotesSlice = createSlice({
  name: 'quotes',
  initialState : {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
  },
  reducers: {
    toggleDisplayAllQuotes: state => {
      state.displayAllQuotes = !state.displayAllQuotes 
    },
    toggleHighlightedQuote: (state, action) => {
      const id = action.payload
      if(!state.highlightedQuote === id){
        state.highlightedQuote = null
      } else {
        state.highlightedQuote = id
      }
    },
    toggleApocryphal: (state, action) => {
      const fake = state.quotes.find(qt => qt.id === action.payload)
      if (fake){
        fake.apocryphal = true
      }
    },
    deleteQuote: (state, action) => {
      state.quotes = state.quotes.filter(qt => qt.id !== action.payload)
    },
    addNewQuote: {
     reducer(state, action){
      state.quotes.push(action.payload)
    },
    prepare(quoteText, authorName, apocryphal){
      return {payload: {id: getNextId(), quoteText, authorName, apocryphal}}
    },
    },
  }
})

export const {
  toggleDisplayAllQuotes, 
  toggleHighlightedQuote, 
  toggleApocryphal,
  deleteQuote,
  addNewQuote,
} = quotesSlice.actions 

export default quotesSlice.reducer

