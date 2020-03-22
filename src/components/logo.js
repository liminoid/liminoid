import React, { Component } from 'react';
import { Text } from 'rebass';

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: '-100vw',
      fonts: 'Neon'
    };
    this.size = props.size;
    this.speed = props.speed;
  }

  componentDidMount() {
    document.fonts.ready.then(fontFaceSet => {
      this.setState({ left: '0' });
      this.setState({
        fonts:
          'Neon, Arial Rounded MT Bold, Helvetica Rounded, Arial, sans-serif'
      });
    });

    const motionQuery = window.matchMedia('(prefers-reduced-motion)');

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
    const ease = 'circ.inout';
    const fillOpacity = 1;
    const speed = this.speed || 1000;
    const origin = '50% 50%';
    const left = '50%';
    const top = '57%';
    const delay = 0;
    const repeat = Number.MAX_SAFE_INTEGER;
    const duration = 10000; // 'rand(1000, 1005)';
    const motion = { [-2]: 2 };
    const callback = (isForward, isYoyo) => {
      this.duration = duration;
    };
    const circle1 = new mojs.Shape({
      parent: '#logo',
      left: left,
      top: top,
      origin: origin,
      shape: 'circle',
      x: -2, // motionQuery.matches ? -2 : motion,
      fill: COLORS.cyan,
      isShowEnd: false,
      duration: duration,
      fillOpacity: fillOpacity,
      radius: this.size,
      //ease: ease,
      //isYoyo: true,
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
      x: 2, //motionQuery.matches ? 2 : motion,
      isShowEnd: false,
      fillOpacity: fillOpacity,
      duration: duration,
      radius: this.size,
      //ease: ease,
      //isYoyo: true,
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

  render(props) {
    return (
      <Text
        style={{
          position: 'relative',
          left: this.state.left
        }}
      >
        <span
          style={{
            marginRight: `${this.size}px`,
            letterSpacing: '0.125em',
            fontSize: `${this.size * 4}px`,
            fontFamily: 'Neon'
          }}
          className="flicker"
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
            marginLeft: `${this.size + 10}px`,
            letterSpacing: '0.125em',
            fontSize: `${this.size * 4}px`,
            fontFamily: 'Neon'
          }}
          className="flicker"
        >
          id
        </span>
      </Text>
    );
  }
}

export default Logo;
