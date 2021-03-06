function Effect(textureUrls, trigger, zIndex) {
  this.urls = textureUrls;

  PIXI.Sprite.call(this, PIXI.loader.resources[this.urls[0]].texture);

  this.frameIndex = 0;

  this.trigger = trigger;

  this.zIndex = zIndex;

  this.position.set(0, 0);

  this.renderable = false;
}

Effect.prototype = Object.create(PIXI.Sprite.prototype);

Effect.prototype.start = function() {
  this.renderable = true;
};

Effect.prototype.update = function(frameDelta) {
  if (!this.renderable) {
    return;
  }

  // Play at 25 fps
  frameDelta *= 25/60;

  var url = this.urls[Math.min(Math.floor(this.frameIndex), this.urls.length - 1)];

  this.texture = PIXI.loader.resources[url].texture;

  this.frameIndex = this.frameIndex + frameDelta;

  if (this.frameIndex > this.urls.length - 1) {
    this.frameIndex = 0;
    this.renderable = false;
  }
};
