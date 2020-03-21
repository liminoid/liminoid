import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { Text } from 'rebass';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.size = props.size;
    this.speed = props.speed;
  }

  animate() {
    const COLORS = {
      white: '#ffffff',
      black: '#000000',
      green: '#49F2CC',
      pink: '#777',
      grey: '#29363B',
      cyan: '#0ff',
      yellow: '#FFE202',
      hotpink: '#f0b'
    };
    const blendMode = 'screen';
    const repeat = Number.MAX_SAFE_INTEGER;
    const duration = 'rand(1000, 1005)';
    const ease = 'circ.inout';
    const fillOpacity = 1;
    const speed = this.speed || 1000;
    const origin = '50% 50%';
    const left = '50%';
    const top = '57%';
    const delay = 0;
    const x = { [-2]: 2 };
    const callback = (isForward, isYoyo) => {
      this.duration = duration;
    };
    const circle1 = new mojs.Shape({
      parent: '#logo',
      left: left,
      top: top,
      origin: origin,
      shape: 'circle',
      x: x,
      fill: COLORS.cyan,
      isShowEnd: false,
      duration: duration,
      fillOpacity: fillOpacity,
      radius: this.size,
      ease: ease,
      isYoyo: true,
      repeat: repeat,
      speed: speed,
      delay: delay
    });
    circle1.el.style['mix-blend-mode'] = blendMode;
    circle1.onRepeatComplete = callback;
    circle1.onPlaybackComplete = () => {
      this.replay();
    };
    circle1.play();
    const circle2 = new mojs.Shape({
      fill: COLORS.hotpink,
      parent: '#logo',
      left: left,
      top: top,
      origin: origin,
      shape: 'circle',
      x: x,
      isShowEnd: false,
      fillOpacity: fillOpacity,
      duration: duration,
      radius: this.size,
      ease: ease,
      isYoyo: true,
      repeat: repeat,
      speed: speed,
      delay: delay
    });
    circle2.el.style['mix-blend-mode'] = blendMode;
    circle2.onRepeatComplete = callback;
    circle2.onPlaybackComplete = () => {
      this.replay();
    };
    circle2.play();
  }

  componentDidMount() {
    // check if mojs loaded yet
    let timerId = setInterval(() => {
      if (typeof mojs !== 'undefined') {
        this.animate();
        clearInterval(timerId);
      }
    }, 100);
  }

  render(props) {
    return (
      <>
        <Helmet>
          <script defer src="https://cdn.jsdelivr.net/npm/@mojs/core"></script>
        </Helmet>
        <Text
          style={{ fontSize: `${this.size * 4}px`, fontFamily: 'neon' }}
          className="flicker"
        >
          <span
            style={{
              marginRight: `${this.size}px`
            }}
          >
            Limin
          </span>
          <div
            id="logo"
            style={{
              position: 'relative',
              display: 'inline'
            }}
          ></div>
          <span
            style={{
              marginLeft: `${this.size + 10}px`
            }}
          >
            id
          </span>
        </Text>
      </>
    );
  }
}

export default Logo;
