var player = (function() {

  var renderer = PIXI.autoDetectRenderer(
    5760,
    1080,
    {
      view:        document.getElementsByTagName('canvas')[0],
      transparent: true
    }
  );

  var stage = new Stage();

  var testMask;
  var testMaskVertices = [];

  var masterSpeed = 1;
  var masterSize  = 1;

  maskVertices.forEach(function(vertices) {
    stage.addActor(new Scenery(vertices));
  });

  function onReceivedActors(actors) {
    for (var i = 0; i < actors.length; i++) {
      stage.addActor(actors[i]);
    }
  }

  function draw() {
    requestAnimationFrame(draw);

    stage.update(masterSpeed, masterSize);

    var done = stage.getDoneActors();

    for (var i = 0; i < done.length; i++) {
      stage.removeActor(done[i]);
    }

    loader.requestActors(done.length, onReceivedActors);

    renderer.render(stage);
  }

  loader.requestActors(10, onReceivedActors);

  requestAnimationFrame(draw);

  return {
    setSpeed: function(newSpeed) {
      masterSpeed = Math.max(0.1, Math.min(newSpeed, 2));
    },

    setSize: function(newSize) {
      masterSize = Math.max(0.1, Math.min(newSize, 2));
    },

    showScenery: function() {
      stage.showScenery();
    },

    hideScenery: function() {
      stage.hideScenery();
    },

    addTestMaskPoint: function(x, y) {
      testMaskVertices.push({
        x: x,
        y: y
      });

      stage.removeActor(testMask);

      testMask = new TestMask(testMaskVertices);

      stage.addActor(testMask);

      settings.showJsonMask(testMaskVertices);
    },

    removeTestMask: function() {
      stage.removeActor(testMask);

      testMaskVertices = [];
    }
  }
})();
