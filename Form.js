class Form {
    constructor() {
      this.title = createElement('h1')
      this.input = createInput("").attribute("placeholder", "Enter your name");
      this.playButton = createButton("Play");
      this.titleImg = createImg("quiz show2.png", "game title");
      this.greeting = createElement("h2");
      this.question = createElement('h1');
      this.option1 = createElement('h1');
      this.option2 = createElement('h1');
      this.option3 = createElement('h1');
      this.option4 = createElement('h1');
    
      
    }
  
    setElementsPosition() {
      this.titleImg.position(100, 50)
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
      this.greeting.position(width / 2 - 600, height / 2 - -100);
    }
  
    setElementsStyle() {
      this.titleImg.class("gameTitle");
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
      this.input2.hide();
      
    }
    handleMousePressed() {
        this.playButton.mousePressed(() => {
          this.input.hide();
          this.playButton.hide();
          this.titleImg.hide();
          


          
          this.title.html("Quiz Game");
    this.title.position(580, 20);

          this.question.html("Question:-What year was the very first model of the iPhone released? " );
    this.question.position(150, 80);
  
    this.option1.html("1: 2005 " );
    this.option1.position(150, 130);
    this.option2.html("2: 2006" );
    this.option2.position(150, 190);
    this.option3.html("3: 2007" );
    this.option3.position(150, 250);
    this.option4.html("4: 2008" );
    this.option4.position(150, 310);

    var message = `
    Hello ${this.input.value()}
    </br>Welcome`;
    this.greeting.html(message);
    this.greeting
    
    

    

         
          

         
        });
      }
    
    display() {
        this.setElementsPosition();
        this.setElementsStyle();
        this.handleMousePressed();
        this.question();
        

        
      
             
        

        
      }
}