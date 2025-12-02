class instructionScene extends Phaser.Scene {
  constructor() {
    super("instructionScene");
  }

  preload() {
    this.load.image("dialog", "assets/dialog.png", {
      frameWidth: 450,
      frameHeight: 450,
    });
  }

  typeText(textObject, message, speed = 40) {
    let i = 0;
    this.time.addEvent({
      delay: speed, // speed of typing
      repeat: message.length - 1,
      callback: () => {
        textObject.text += message[i];
        i++;
      },
    });
  }

  create() {
    console.log("This is instructionScene");

    this.add.image(370, 450, "dialog").setScale(1.5);

    // Start with empty text
    let line1 = this.add.text(350, 585, "", {
      fontFamily: "christmaspix",
      fontSize: "30px",
      fill: "#fff0e5",
    });
    let line2 = this.add.text(180, 630, "", {
      fontFamily: "christmaspix",
      fontSize: "25px",
      fill: "#fff0e5",
    });
    let line3 = this.add.text(300, 670, "", {
      fontFamily: "christmaspix",
      fontSize: "25px",
      fill: "#fff0e5",
    });
    let line4 = this.add.text(100, 720, "", {
      fontFamily: "christmaspix",
      fontSize: "20px",
      fill: "#fff0e5",
    });
    let line5 = this.add.text(250, 770, "", {
      fontFamily: "christmaspix",
      fontSize: "25px",
      fill: "#fff0e5",
    });

    // Play typewriter animation
    this.typeText(
      line1,
      "Ho oh no!",
      40
    );
    this.time.delayedCall(1200, () => {
      this.typeText(line2, "All my elves have fallen sick on", 40);
    });
    this.time.delayedCall(2500, () => {
      this.typeText(line3, "Christmas Eve!", 40);
    });
    this.time.delayedCall(3800, () => {
      this.typeText(line4, "Help me gather enough presents before Christmas!", 40);
    });
    this.time.delayedCall(6000, () => {
      this.typeText(line5, "PRESS SPACE TO HELP SANTA", 40);
    });

    //this.input.once('pointerdown', function(){
    var spaceDown = this.input.keyboard.addKey("SPACE");

    spaceDown.on(
      "down",
      function () {
        console.log("Spacebar pressed, go to instruction2Scene");
        this.scene.start("instruction2Scene");
      },
      this
    );
  }
}
