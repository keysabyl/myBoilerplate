import Phaser from 'phaser';
import { CST } from '../constants';
import Images from '../images';
import Preload from './Preload';

class Boot extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.BOOT });
  }

  /**
   * preload
   */
  public preload() {
      // load the image for the preloading scene
      this.load.image('loading', Images.loading);
  }

  /**
   * create
   */
  public create() {
    console.log('Hello from Boot Scene');
    this.scene.add(CST.SCENES.PRELOAD, Preload);
    this.scene.start(CST.SCENES.PRELOAD);
  }
}

export default Boot;
