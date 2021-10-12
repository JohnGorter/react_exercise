let store = {
    listeners:[],
    cards:[],

    addListener(f){ this.listeners.push(f);},
    notifyListeners() {
        this.listeners.forEach(l => l());
    },

    addCard(c){
        this.cards = [...this.cards, {title:c.title, lane:c.lane, pos:0}];
        this.notifyListeners();
    },
    moveCard(title, lane){
        let card = this.cards.find(c => c.title == title);
        if (card) card.lane = lane;
        this.notifyListeners();
    }
}

export default store;