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
     if (window.bgMusic && window.bgMusic.isPlaying) {
} else {
    window.bgMusic = this.sound.add("sugarplum", { loop: true, volume: 1 });
    window.bgMusic.play();
}
     this.add.image(470, 480, "intro").setScale(1.8);

        console.log("This is preload spacebar V3");

        //this.input.once('pointerdown', function(){
        let spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, go to instructionScene");
        this.scene.start("instructionScene");
        }, this );

    }

}
