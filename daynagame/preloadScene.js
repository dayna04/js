class preloadScene extends Phaser.Scene {

    constructor ()
    {
        super('preload');
    }
    create () {
        let graphics = this.add.graphics();

        graphics.fillStyle(0xff3300, 1);

        graphics.fillRect(100, 200, 600, 300);
        graphics.fillRect(100, 100, 100, 100);

        this.add.text(400, 150, 'NORTH', { font: '50px christmaspix', fill: '#ffeace' });
        this.add.text(400, 250, 'POLE', { font: '50px christmaspix', fill: '#ffeace' });
        this.add.text(400, 350, 'PANIC!!', { font: '50px christmaspix', fill: '#ffeace' });
        this.add.text(400, 500, 'PRESS SPACE TO HELP SANTA!', { font: '50px christmaspix', fill: '#ffeace' });

        console.log("This is preload spacebar V3");

        //this.input.once('pointerdown', function(){
        let spaceDown = this.input.keyboard.addKey('SPACE');
        
        spaceDown.on('down', function(){
        console.log("Spacebar pressed, go to introScene");
        this.scene.start("introScene");
        }, this );

    }

}
