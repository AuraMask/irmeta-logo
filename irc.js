const loop = () => {};

function createNode(type) {
  return document.createElement(type);
}

function setAttribute(node, attribute, value) {
  node.setAttribute(attribute, value);
}

/** @namespace options.svgPath */
/** @namespace options.pxNotRatio */
module.exports = function createLogo(options = {}) {
  const container = createNode('img');
  let width = options.width || 200;
  let height = options.height || 200;
  let svgPath = options.svgPath || './ir.svg';

  if (!options.pxNotRatio) {
    width = (window.innerWidth * (options.width || 0.25)) | 0;
    height = ((window.innerHeight * options.height) || width) | 0;

    if ('minWidth' in options && width < options.minWidth) {
      width = options.minWidth;
      height = (options.minWidth * options.height / options.width) | 0;
    }
  }

  setAttribute(container, 'width', width);
  setAttribute(container, 'height', height);
  setAttribute(container, 'src', svgPath);

  document.body.appendChild(container);

  return {
    container: container,
    lookAt: loop,
    setFollowMouse: loop,
    setFollowMotion: loop,
    stopAnimation: loop,
    startAnimation: loop,
  };
};
