function Krumelur(texture, animation) {
  // Inherits from PIXI.Sprite
  PIXI.Sprite.call(this, texture);

  this.animation = animation;
  this.zIndex    = 0;

  this.positionIdx = 0;
  this.scaleIdx    = 0;
  this.rotationIdx = 0;
  this.opacityIdx  = 0;

  this.frame = 0;

  this.anchor.set(0.5, 0.5);

  this.opacity = 100;

  this.done = false;
}

Krumelur.prototype = Object.create(PIXI.Sprite.prototype);

Krumelur.prototype.update = function(frameDelta, size) {
  this.frame += frameDelta;

  var position = animationPositionAtFrame(this.animation, this.positionIdx, this.frame);
  var scale    = size * animationScaleAtFrame(this.animation, this.scaleIdx, this.frame) / 100;
  var rotation = animationRotationAtFrame(this.animation, this.rotationIdx, this.frame);

  this.opacity = animationOpacityAtFrame(this.animation, this.opacityIdx, this.frame);

  this.position.set(position.x, position.y);
  this.zIndex = position.z;

  this.scale.set(19, scale);

  this.rotation = rotation / 180 * Math.PI;

  if (this.frame >= this.animation.duration) {
    this.done = true;
  }

  this.updateAnimationIndices();
};

Krumelur.prototype.updateAnimationIndices = function() {
  this.positionIdx = getNextAnimationIndex(this.animation, 'positions', this.frame, this.positionIdx);
  this.scaleIdx    = getNextAnimationIndex(this.animation, 'scales', this.frame, this.scaleIdx);
  this.rotationIdx = getNextAnimationIndex(this.animation, 'rotations', this.frame, this.rotationIdx);
  this.opacityIdx  = getNextAnimationIndex(this.animation, 'opacities', this.frame, this.opacityIdx);
};
