class Action{
    // provedeno charaktery během dne, noci, nebo eventu.
    // Akce mohou ovlivnit survavibility, rsPoints, inv

    // při vytváření Actions budu mít samostatný listy na typ Action (night, day, feast...) typ tady řešit nebudu
    constructor(text, failedText, requirement) {
        this.text = text;
        this.failedText = failedText;
        this.requirement = requirement;
    }



}