/**
* @author       Richard Davey <rich@photonstorm.com>
* @copyright    2016 Photon Storm Ltd.
* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
*/

Phaser.GameObjects.Text.FACTORY_KEY = 'text';

/**
* Creates a new Text object.
*
* @method Phaser.GameObjects.Factory#text
* @param {number} [x=0] - The x coordinate of the Text. The coordinate is relative to any parent container this text may be in.
* @param {number} [y=0] - The y coordinate of the Text. The coordinate is relative to any parent container this text may be in.
* @param {string} [text=''] - The text string that will be displayed.
* @param {object} [style] - The style object containing style attributes like font, font size , etc.
* @param {Phaser.Group} [group] - Optional Group to add the object to. If not specified it will be added to the World group.
* @return {Phaser.Text} The newly created text object.
*/
Phaser.GameObjects.Text.FACTORY_ADD = function (x, y, text, style, group) {

    if (group === undefined) { group = this.world; }

    return group.add(new Phaser.GameObjects.Text(this.game, x, y, text, style));

};

/**
* Creates a new Text object.
*
* @method Phaser.GameObjects.Creator#text
* @param {number} x - X position of the new text object.
* @param {number} y - Y position of the new text object.
* @param {string} text - The actual text that will be written.
* @param {object} style - The style object containing style attributes like font, font size , etc.
* @return {Phaser.Text} The newly created text object.
*/
Phaser.GameObjects.Text.FACTORY_MAKE = function (x, y, text, style) {

    return new Phaser.GameObjects.Text(this.game, x, y, text, style);

};
