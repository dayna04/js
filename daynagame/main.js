class main extends Phaser.Scene {

    constructor() {
        super({
            key: 'main'
        });

        // Put global variable here
    }

    preload() {

        // Preload all the assets here

        // Preload any images here

        // Preload any sound and music here
        // this.load.audio('ping', 'assets/ping.mp3');
        // this.load.audio('bgMusic', 'assets/bgMusic.mp3');
    }

    create() {

        console.log('*** main scene');

        // Add any sound and music here
        // ( 0 = mute to 1 is loudest )
        //this.music = this.sound.add('bgMusic').setVolume(0.3) // 10% volume

        //this.music.play()
        //window.music = this.music


        // Add image and detect spacebar keypress
        //this.add.image(0, 0, 'main').setOrigin(0, 0);

        // Check for spacebar or any key here
        var spaceDown = this.input.keyboard.addKey('SPACE');

        // On spacebar event, call the world scene        
        spaceDown.on('down', function () {
            console.log('Jump to gameScene');

            this.scene.start('gameScene',
                // Optional parameters
                {

                }
            );
        }, this);


        // Add any text in the main page
        this.add.text(210, 200, 'NORTH', { font: '100px christmaspix', fill: '#ffeace' });
        this.add.text(210, 330, 'POLE', { font: '100px christmaspix', fill: '#ffeace' });
        this.add.text(210, 460, 'PANIC!!', { font: '100px christmaspix', fill: '#ffeace' });
        this.add.text(250, 650, 'PRESS SPACE TO HELP SANTA!', { font: '20px christmaspix', fill: '#ffeace' });


        // Create all the game animations here

    }


}