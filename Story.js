class Story{
    constructor(){
        this.button = createButton("Play");
        this.title = createElement("h2");

    }

    display(){
        this.button.position(300, 200);
        this.button.style('background', 'red');
        this.button.size(100);

        this.title.html("Survive on the Zombieland");
        this.title.position(220, 10);
        this.title.style('background','red');

        this.button.mousePressed(()=>{
          this.button.hide();
          this.title.hide();
          gameState = 1;

          this.title1 = createElement("h3");
          this.title1.html("Story-");
          this.title1.position(50, 10);
          this.title1.style('background', 'yellow');

          this.paragraph = createElement("h3");
          this.paragraph.html("There is a boy named Hrithik.");
          this.paragraph.position(100, 10);
          this.paragraph.style('background', 'yellow');

          this.paragraph1 = createElement("h3");
          this.paragraph1.html("Due to sudden chemical leakage his whole Family turns into zombie.");
          this.paragraph1.position(50, 40);
          this.paragraph1.style('background', 'yellow');

          this.paragraph2 = createElement("h3");
          this.paragraph2.html("Slowly the entire city turns into zombieland.");
          this.paragraph2.position(50, 70);
          this.paragraph2.style('background', 'yellow');

          this.paragraph3 = createElement("h3");
          this.paragraph3.html("Please help Hrithik to fight with the zombies and save his city and his family members.");
          this.paragraph3.position(50, 100);
          this.paragraph3.style('background', 'yellow');

          this.start = createButton("Click to Play");
          this.start.position(350, 200);
          this.start.style('background', 'lightblue');

          this.start.mousePressed(()=>{
              this.title1.hide();
              this.paragraph.hide();
              this.paragraph1.hide();
              this.paragraph2.hide();
              this.paragraph3.hide();
              this.start.hide();
              gameState = 2;
          })

        })

        

    }
}