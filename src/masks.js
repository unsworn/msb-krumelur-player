function Mask(vertices, zIndex) {
  this.vertices = vertices;
  this.z        = zIndex || 0;
}

Mask.prototype.draw = function(context) {
  context.moveTo(this.vertices[0].x, this.vertices[0].y);

  for (var j = 1; j < this.vertices.length; j++) {
    context.lineTo(this.vertices[j].x, this.vertices[j].y);
  }

  context.globalCompositeOperation = 'destination-out';

  context.fill();

  context.globalCompositeOperation = 'source-over';
};

var maskVertices = [
  // 1
  [
    {
      x: 100,
      y: 30
    },
    {
      x: 200,
      y: 50
    },
    {
      x: 100,
      y: 60
    }
  ],
  // 2
  [
    {
      x: 557,
      y: 46
    },
    {
      x: 577,
      y: 252
    },
    {
      x: 685,
      y: 150
    }
  ],
  // 3
  [
    {
      x: 899,
      y: 344
    },
    {
      x: 853,
      y: 451
    },
    {
      x: 996,
      y: 427
    },
    {
      x: 988,
      y: 271
    },
    {
      x: 895,
      y: 272
    },
    {
      x: 954,
      y: 332
    }
  ],
  // 4
  [
    {
      "x": 540,
      "y": 1060
    },
    {
      "x": 474,
      "y": 1030
    },
    {
      "x": 527,
      "y": 968
    },
    {
      "x": 547,
      "y": 873
    },
    {
      "x": 498,
      "y": 842
    },
    {
      "x": 536,
      "y": 831
    },
    {
      "x": 537,
      "y": 771
    },
    {
      "x": 482,
      "y": 720
    },
    {
      "x": 533,
      "y": 716
    },
    {
      "x": 516,
      "y": 675
    },
    {
      "x": 516,
      "y": 608
    },
    {
      "x": 554,
      "y": 611
    },
    {
      "x": 533,
      "y": 547
    },
    {
      "x": 558,
      "y": 565
    },
    {
      "x": 560,
      "y": 488
    },
    {
      "x": 582,
      "y": 580
    },
    {
      "x": 601,
      "y": 572
    },
    {
      "x": 611,
      "y": 583
    },
    {
      "x": 584,
      "y": 601
    },
    {
      "x": 620,
      "y": 607
    },
    {
      "x": 635,
      "y": 616
    },
    {
      "x": 602,
      "y": 646
    },
    {
      "x": 577,
      "y": 693
    },
    {
      "x": 641,
      "y": 693
    },
    {
      "x": 576,
      "y": 732
    },
    {
      "x": 640,
      "y": 722
    },
    {
      "x": 575,
      "y": 758
    },
    {
      "x": 633,
      "y": 774
    },
    {
      "x": 581,
      "y": 771
    },
    {
      "x": 571,
      "y": 980
    },
    {
      "x": 570,
      "y": 1061
    },
    {
      "x": 537,
      "y": 1041
    },
    {
      "x": 527,
      "y": 1054
    }
  ]
];