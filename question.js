class Question{
    constructor() {
        this.input=createInput("Enter your name here");
    }

    display() {
        this.title.html("My Quiz Game");
        this.title.position(350,0);

        this.question.html("Question- What starts and ends with the letter 'E', but has only one letter?");
        this.question.position(150,80);
        this.option1.html("1: Everyone");
        this.option1.position(150,100);
    }
}