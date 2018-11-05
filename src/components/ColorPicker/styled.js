import styled, { keyframes } from 'styled-components/macro';
import media from 'sharedStyle/utils/media';

// const alongPath = keyframes`
//   100% {
//      offset-distance: 100%;
//   }
// `;

// const Container = styled.div`
//   position: relative;
// `;

const CurvedContainer = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 128px;
  height: 64px;

  & .path {
    stroke: #5652BF;
    stroke-linecap: round;
    stroke-linejoin: round;
  }
`;


const CurvedOffset = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  offset-path: path("M27.8,41.1a41,41,0,0,1,6.5-8.4A41.9,41.9,0,0,1,64,20.4m36.2,20.7a41,41,0,0,0-6.5-8.4A41.9,41.9,0,0,0,64,20.4");
  offset-distance: 50%;
  width: 1.5em;
  height: 1.5em;
  border-radius: 50%;
  background: red;
  z-index: 2;
`;



// const Path = styled.svg`
// `:


const pegRadiusEm = 1.5;
const pegRadius = pegRadiusEm * 16;
const radius = pegRadius * 4;
const stroke = pegRadius * 1.5;

const normalizedRadius = (radius - (stroke * 2)) + stroke / 2;
const circumference = normalizedRadius * 2 * Math.PI;
const strokeDasharray = `${0.333 * circumference} ${circumference}`;


const Container = styled.div`
  position: relative;
  height: 120px;
  width: 120px;
`;


const CircleSVG = styled.svg.attrs({
  height: (radius - stroke) * 2,
  width: (radius - stroke) * 2,
})`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
`;

const CircleBackground = styled.circle.attrs({
  stroke: 'blue',
  fill: 'transparent',
  r: normalizedRadius,
  cx: radius - stroke,
  cy: radius - stroke,
})`
  transform-origin: 50% 50%;
  transform: rotate(-150deg);
  stroke-dasharray: ${strokeDasharray};
  stroke-width: ${stroke};
  stroke-linecap: round;
`;

const Peg = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-height: ${props => props.color ? '3em' : '2em'};
  min-width: ${props => props.color ? '3em' : '2em'};
  margin: 0;
  background-color: ${props => props.theme[props.color || 'mediumGray']};
  border-radius: 50%;
  border: none;
`;

export { Container, CurvedContainer, CurvedOffset, CircleSVG, CircleBackground, Peg };

  
  // data() {
  //   return {
  //     secondsLeft: this.timerLength,
  //     radius: 66,
  //     stroke: 16,
  //     bidStatus: 0,
  //   };
  // },
  
  // computed: {
    
  //   progress() { return (this.timerLength - this.secondsLeft) / this.timerLength; },
    
  //   normalizedRadius() { return (this.radius - (this.stroke * 2))  + this.stroke / 2; },
    
  //   circumference() {return this.normalizedRadius * 2 * Math.PI; },
    
  //   strokeDashoffset() { return this.circumference - (this.progress * this.circumference); },
    



//   html, body {
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100%;
//   position: relative;
// }

// .timerContainer {
//   width: 100%;
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
// }

// .timer {
//   position: relative;
//   height: 100px;
//   width: 100px;
//   margin-right: 20px;
// }

// svg {
//   margin: 0;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
// }

// circle {
//   transition: stroke-dashoffset .75s;
//   transform: rotate(-90deg);
//   transform-origin: 50% 50%;
// }

// .time {
//   margin: 0;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   text-align: center;
//   line-height: 24px;
//   color: #6D747C;
// }


// const auctionEndingTimer = Vue.component('auction-ending-timer', {
//   props: {
//     timerLength: Number,
//   },
  
//   data() {
//     return {
//       secondsLeft: this.timerLength,
//       radius: 66,
//       stroke: 16,
//       bidStatus: 0,
//     };
//   },
  
//   computed: {
    
//     progress() { return (this.timerLength - this.secondsLeft) / this.timerLength; },
    
//     normalizedRadius() { return (this.radius - (this.stroke * 2))  + this.stroke / 2; },
    
//     circumference() {return this.normalizedRadius * 2 * Math.PI; },
    
//     strokeDashoffset() { return this.circumference - (this.progress * this.circumference); },
    
//     mins() { return Math.floor(this.secondsLeft / 60); },
    
//     secs() { return Math.floor(this.secondsLeft % 60); },
    
//     bidStatusMsg() {
//       const msgs = {
//         0: 'Accepting Bids',
//         1: 'Going Once',
//         2: 'Going Twice',
//       };
//       return msgs[this.bidStatus];
//     },
    
//     bidStatusColor() {
//       const colors = {
//         0: '#289F62',
//         1: '#F7941D',
//         2: '#FF0000',
//       };
//       return colors[this.bidStatus];
//     },
//   },
  
//   methods: {
//     restartTimer() {
//       this.secondsLeft = this.timerLength;
//       this.bidStatus = 0;
//     },
//   },
  
//   mounted() {
//     const interval = setInterval(() => {
      
//       this.secondsLeft -= 0.5;
     
//       if (this.secondsLeft === Math.floor(this.timerLength / 2)) {
//         this.bidStatus = 1;
//       } else if (this.secondsLeft === Math.floor(this.timerLength / 4)) {
//         this.bidStatus = 2;
//       } else if (this.secondsLeft === 0) {
//         clearInterval(interval);
//       }
        
//     }, 500);
//   },
  
//   template: `
//     <div class="timerContainer">
//       <div class="timer">
//         <svg
//           :height="(radius - stroke) * 2"
//           :width="(radius - stroke) * 2"
//          >
//           <circle
//              :stroke="bidStatusColor"
//              :stroke-width="stroke - 1"
//              fill="transparent"
//              :r="normalizedRadius"
//              :cx="radius - stroke"
//              :cy="radius - stroke"
//           />
//            <circle
//              stroke="#F5F5F5"
//              :stroke-dasharray="circumference + ' ' + circumference"
//              :style="{ strokeDashoffset: strokeDashoffset }"
//              :stroke-width="stroke"
//              fill="transparent"
//              :r="normalizedRadius"
//              :cx="radius - stroke"
//              :cy="radius - stroke"
//           />
//         </svg>
//         <div class="time">
//           <p>
//             <strong>{{mins}}</strong>m
//             <br>
//             <strong>{{secs}}</strong>s
//           </p>
//         </div>
//       </div>
//       <div>
//         <h3>Auction Ending</h3>
//         <h3 :style="{ color: bidStatusColor, textTransform: 'uppercase' }">{{bidStatusMsg}}</h3>
//         <button @click="restartTimer">Restart</button>
//       </div>
//     </div>
//   `
// });




// <path d="M0,50 a1,1 0 0,0 100,0" fill="blue" />
// 
// offset-path: path("M0,50 a1,1 0 0,0 100,0");
  // transition: 0.2s;
  // width: 100px;
  // height: 100px;
  // line-height: 100px;
  // text-align: center;
  // background: red;
  // border-radius: 50%;
  // color: white;
  // animation: alongPath 1.5s infinite alternate;
  // 
  // import styled, { keyframes } from 'styled-components'



// const FadeInButton = styled.button`
//   animation: 1s ${fadeIn} ease-out;
// `