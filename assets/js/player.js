var player = (function() {

  var stage = new Stage();

  var testMask;
  var testMaskVertices = [];

  var masterSpeed = 1;
  var masterSize  = 1;

  var queue = [];

  masks.forEach(function(mask) {
    var color = constants.MASK_COLORS[mask.z];
    stage.addMask(new Scenery(mask.vertices, mask.z, color, mask.name));
  });

  effects.forEach(function(effectJson) {
    loader.loadEffect(effectJson, function(effect) {
      stage.addEffect(effect);
    });
  });

  function draw() {
    requestAnimationFrame(draw);

    stage.update(masterSpeed, masterSize);

    var done = stage.getDoneActors();

    for (var i = 0; i < done.length; i++) {
      stage.removeKrumelur(done[i]);
    }

    renderer.render(stage);
  }

  if (locationUtils.isDev()) {
    // addTestKrumelur();
  } else {
    // Request new krumelurs at regular intervals
    setInterval(function() {
      var amount = Math.max(0, constants.MAX_KRUMELURER - stage.getKrumelurer().length);

      loader.requestActors(amount, onReceivedActor);
    }, constants.REQUEST_INTERVAL);

    // Add queued krumelur at reqular intervals
    setInterval(function() {
      if (queue.length > 0) {
        stage.addKrumelur(queue.shift());
      }
    }, constants.ADD_INTERVAL);

    loader.requestActors(constants.MAX_KRUMELURER, onReceivedActor);
  }

  function onReceivedActor(actor) {
    queue.push(actor);
  }

  function addTestKrumelur() {
    var imageUrl = 'files/' + locationUtils.getQueryValue('name');
    var behavior = window.behaviors[locationUtils.getQueryValue('behavior')];

    if (imageUrl && behavior) {
      loader.createKrumelur(imageUrl, behavior, function(krumelur) {
        stage.addKrumelur(krumelur);
      });
    }
  }

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

    showSceneryLayer: function(zIndex) {
      stage.showSceneryLayer(zIndex);
    },

    hideSceneryLayer: function(zIndex) {
      stage.hideSceneryLayer(zIndex);
    },

    showSceneryWithName: function(name) {
      stage.showSceneryWithName(name);
    },

    hideSceneryWithName: function(name) {
      stage.hideSceneryWithName(name);
    },

    enableSceneryLayer: function(zIndex) {
      stage.enableSceneryLayer(zIndex);
    },

    disableSceneryLayer: function(zIndex) {
      stage.disableSceneryLayer(zIndex);
    },

    enableSceneryWithName: function(name) {
      stage.enableSceneryWithName(name);
    },

    disableSceneryWithName: function(name) {
      stage.disableSceneryWithName(name);
    },

    addTestMaskPoint: function(x, y) {
      testMaskVertices.push({
        x: x,
        y: y
      });

      stage.removeMask(testMask);

      testMask = new TestMask(testMaskVertices);

      stage.addMask(testMask);

      settings.showJsonMask(testMaskVertices);
    },

    undoTestMaskPoint: function() {
      testMaskVertices.pop();

      stage.removeMask(testMask);

      testMask = new TestMask(testMaskVertices);

      stage.addMask(testMask);

      settings.showJsonMask(testMaskVertices);
    },

    removeTestMask: function() {
      stage.removeMask(testMask);

      testMaskVertices = [];
    },

    addTestKrumelur: function() {
      addTestKrumelur();
    },

    clearKrumelurer: function() {
      stage.clearKrumelurer();
    }
  };
})();
