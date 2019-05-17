import Phaser from 'phaser';
import { CST } from '../constants';

class Play extends Phaser.Scene {
  constructor() {
    super({ key: CST.SCENES.PLAY });
  }

  /**
   * init
   */
  public init() {
//
  }

  /**
   * preload
   */
  public preload() {
      //this.load.spritesheet('knopStart','knopStart.png',{frameWidth:200,frameHeight:200});
      this.textures.addSpriteSheetFromAtlas('knopNiveau',{ frameHeight: 200, frameWidth: 200, atlas: "spritesheetsBase", frame: "knopNiveau.png" });
      this.textures.addSpriteSheetFromAtlas('boxEvalueer',{ frameHeight: 200, frameWidth: 200, atlas: "spritesheetsBase", frame: "boxEvalueer.png" });
      this.textures.addSpriteSheetFromAtlas('knopStart',{ frameHeight: 200, frameWidth: 200, atlas: "spritesheetsBase", frame: "knopStart.png" });

  }

  /**
   * create
   */
  public create() {

    const bg = this.add.image(0, 0, 'background');
    bg.setOrigin(0, 0);
    //------  images -------------------------------------------------------
    //this.add.image(1847, 138,'imagesBase','boxLeeftijd.png').setOrigin(0.5);
    this.boei = this.add.image(1847, 138,'boei').setOrigin(0.5).setDepth(1);
    this.boei.setInteractive({ useHandCursor: true  });
    this.boei.on('pointerover', () => { console.log('pointerover'); });
    //this.add.image(1850, 990,'imagesBase','knopInfo.png').setOrigin(0.5);
    this.add.image(1850, 1203,'imagesBase','knopInstel.png').setOrigin(0.5);
    this.add.image(1850, 1416,'imagesBase','knopVolscherm.png').setOrigin(0.5);

    //------ buttons ------------------------------------------------------

    //this.knopNiveau = this.add.spritesheet(1550, 567,'spritesheetsBase','knopNiveau.png');
    this.knopNiveau = this.add.sprite(1850, 351, "knopNiveau", 1).setOrigin(0.5);
    this.boxEvalueer = this.add.sprite(1850, 564, "boxEvalueer", 1).setOrigin(0.5);
    //this.knopStart = this.add.sprite(1850, 777, "knopStart", 1).setOrigin(0.5);



    this.actieKnopInfo();
    this.actieKnopStart();

  }

  /**
   * update
   */
  public update() {

  }

  private gameOver() {

  }


  actieKnopInfo(this)
  {
      this.knopInfo = this.add.image(1850, 990,'imagesBase','knopInfo.png')
        .setInteractive( { useHandCursor: true  } )
        .on('pointerup', () => { console.log('pointerdown'); });

  }


  actieKnopStart(this)
  {
      this.knopStart = this.add.sprite(1850, 777, "knopStart", 0)
        .setOrigin(0.5)
        .setInteractive() //{ useHandCursor: true  }
        .on('pointerdown', () => { console.log('pointerdown'); });

  }


  actiefknopStart()
  {
      console.log('Er werd geklikt op knopStart');
  }
}

export default Play;
