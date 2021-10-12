

import { createStore } from 'redux';

const StoreConstants = { SETFILTER:'SETFILTER', ADDCARD: 'ADDCARD', CHANGECARD:'CHANGECARD' };
export const storeActions = {
    setFilter: (filter) => { return { type: StoreConstants.SETFILTER, filter:filter }},
    addCard: (card, lane) => { return { type: StoreConstants.ADDCARD, card:card, lane:lane }},
    changeCard: (card, lane) => { return { type: StoreConstants.CHANGECARD, card:card, lane:lane }} 
};

let _store = createStore((state = { filter:'', cards:[]}, action) => {
    switch (action.type){
        case StoreConstants.SETFILTER:
            state.filter = action.filter;
            return { ...state};
        case StoreConstants.ADDCARD:
            let newcard = { title: action.card, lane: action.lane };
            state.cards = [...state.cards, newcard]
            return {...state};
        case StoreConstants.CHANGECARD:
            let card = state.cards.find(c => c.title == action.card);
            if (card) card.lane = action.lane;
            return {cards:[...state.cards]};
        default:
            return {...state};
    }
});

export const store = _store;