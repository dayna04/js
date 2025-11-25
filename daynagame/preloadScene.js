class preloadScene extends Phaser.Scene {
//first scene
    constructor ()
    {
        super('preloadScene');
    }

    preload(){
        this.load.image("intro", "assets/intro.png", {
    });
        this.load.audio("sugarplum","assets/sugarplum.mp3");
    }
    create () {

        // turn on loop, adjust the volume
     window.bgMusic = null;
     if (!window.bgMusic) {
     window.bgMusic = this.sound.add("sugarplum", { loop: true, volume: 1 });
     window.bgMusic.play();
     }
     this.add.image(810, 540, "intro").setScale(2);

        this.add.text(150, 300, 'NORTH', { font: '80px christmaspix', fill: '#fff7d2' });
        this.add.text(550, 300, 'POLE', { font: '80px christmaspix', fill: '#fff7d2' });
        this.add.text(270, 400, 'PANIC!!', { font: '80px christmaspix', fill: '#fff7d2' });
        this.add.text(310, 500, 'PRESS SPACE TO START', { font: '20px christmaspix', fill: '#ffeace' });

        console.log("This is preload spacebar V3");

        //this.input.once('pointerdown', function(){
        let spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, go to instructionScene");
        this.scene.start("instructionScene");
        }, this );

    }

}
