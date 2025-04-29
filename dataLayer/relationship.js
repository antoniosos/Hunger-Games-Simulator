class Relationship { //objekt porpojující DVĚ postavy, jinde budu mít list relationshipů
    constructor(charName1, charName2, rsPoints) { //rsPoints jsou 0 až 100 s tím že 50 je neutrál a 0 je fujfuj
        this.charName1 = charName1;
        this.charName2 = charName2;
        this.rsPoints = rsPoints;
    }
    
    // postavy mají body i k sobě a čím nižší to je tak to zvyššuje šanci na sebevraždu nebo sebe objetování na záchranu někoho 
}