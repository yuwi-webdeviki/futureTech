const rootSelector = '[data-js-video-player]'

class VideoPlayer {
  selectors = {
    root: rootSelector,
    video: '[data-js-video-player-video]',
    panel: '[data-js-video-player-panel]',
    playButton: '[data-js-video-player-play-button]',
    clickLayer: '[data-js-video-player-click-layer]',
  }

  stateClasses = {
    isActive: 'is-active',
  }

  constructor(rootElement) {
    this.rootElement = rootElement
    this.videoElement = this.rootElement.querySelector(this.selectors.video)
    this.panelElement = this.rootElement.querySelector(this.selectors.panel)
    this.playButtonElement = this.rootElement.querySelector(this.selectors.playButton)
    this.clickLayerElement = this.rootElement.querySelector(this.selectors.clickLayer)
    this.bindEvents()
  }

  onPlayButtonClick = () => {
    this.videoElement.play()
    this.videoElement.controls = true
    this.panelElement.classList.remove(this.stateClasses.isActive)
  }

  onVideoPause = () => {
    this.videoElement.controls = false
    this.panelElement.classList.add(this.stateClasses.isActive)
  }

  onVideoClick = () => {
    if (!this.videoElement.paused) {
      this.videoElement.pause()
    }
  }

  bindEvents() {
    this.playButtonElement.addEventListener('click', this.onPlayButtonClick)
    this.videoElement.addEventListener('pause', this.onVideoPause)
    this.clickLayerElement.addEventListener('click', this.onVideoClick)
  }
}

class VideoPlayerCollection {
  constructor() {
    this.init()
  }

  init() {
    document.querySelectorAll(rootSelector).forEach((element) => {
      new VideoPlayer(element)
    })
  }
}

export default VideoPlayerCollection
