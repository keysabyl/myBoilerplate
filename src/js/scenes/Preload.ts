import Phaser from 'phaser';
import { CST } from '../constants';
import Images from '../images';

import Play from './Play'; // ./ = current folder

class Preload extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.PRELOAD });
  }

  public init()
  {
    this.CONFIG = this.sys.game.CONFIG;
  }

  public preload()
  {
    // load all the assets for the game, except the loadingBar
    this.load.image('background', Images.background);
    this.load.image('boei', Images.boei);

    //this.load.pack('section', 'assets/spelAfbeeldingen.json');
    this.load.atlas('imagesBase', Images.imagesBase, '/imagesBase.json');
    this.load.atlas('spritesheetsBase',Images.spritesheetsBase,'/spritesheetsBase.json');

    // to test the loading bar with multiple assets:
    for (var i = 0; i < 500; i++) {
      this.load.image('edubits'+i, Images.edubits);
    }
    const loadingBar = this.add.image(-200, -200, 'loading').setOrigin(0);
    // Copy the values of x, y, w and h of the object loadingBar  ES6
    const {x, y, width: w, height: h} = loadingBar;

    // camera.setViewport(top, left, width, height);
    const camera = this.cameras.add(this.CONFIG.centerX - (loadingBar.width/2), this.CONFIG.centerY, 0, h);
    // set to false so the loadingBar isn't showing for a little moment
    camera.visible = false;
    camera.setScroll(x, y);

    // n is % of loading assets
    this.load.on('progress', function(n)
    {
      if n > 0 {camera.visible = true};
      camera.setSize(Math.ceil(n * w), h);
    });
  }

  /**
   * create
   */
  public create()
  {
    console.log('Hello from Preload Scene');

    this.scene.add(CST.SCENES.PLAY, Play);
    this.scene.start(CST.SCENES.PLAY);
  }
}

export default Preload;
