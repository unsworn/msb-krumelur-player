var constants = {
  // These dimensions fit the canvas nicely on the wall.
  // Actual projection is 4080x768
  CANVAS_WIDTH: 3930,
  CANVAS_HEIGHT: 760,

  MAX_KRUMELURER: 6,
  ADD_INTERVAL: 2000, //ms
  REQUEST_INTERVAL: 4000, //ms

  URL_LATEST: '/api/krumelur/latest/',
  URL_RANDOM: '/api/krumelur/random/',

  DEFAULT_BEHAVIOR: 'newton2',

  MASK_COLORS: {
    '100': 0xffffff,
    '90': 0x8000ff,
    '80': 0x0000ff,
    '70': 0x0080ff,
    '60': 0xffff00,
    '50': 0xff0000,
  }
};
