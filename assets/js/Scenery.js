function Scenery(vertices, zIndex, color, name) {
  // Inherits from PIXI.Graphics
  PIXI.Graphics.call(this);

  this.polygon = [];

  for (var i = 0; i < vertices.length; i++) {
    this.polygon.push(vertices[i].x);
    this.polygon.push(vertices[i].y);
  }

  this.zIndex = this.originalZ = zIndex;
  this.name   = name.toLowerCase();

  this.showColor = color;
  this.hideColor = 0x000000;

  this.setColor(this.hideColor);
}

Scenery.prototype = Object.create(PIXI.Graphics.prototype);

Scenery.prototype.setColor = function(color) {
  this.clear();

  this.beginFill(color, 1);

  this.drawPolygon(this.polygon);

  this.endFill();
};

Scenery.prototype.show = function() {
  this.setColor(this.showColor);
};

Scenery.prototype.hide = function() {
  this.setColor(this.hideColor);
};

Scenery.prototype.enable = function() {
  this.zIndex = this.originalZ;
};

Scenery.prototype.disable = function() {
  this.zIndex = -1000;
};
