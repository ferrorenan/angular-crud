import {
  animate, keyframes, query, stagger,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const animateListItems =
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({
          opacity: 0,
        }), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.8s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-30px)', offset: 0}),
            style({opacity: .5, transform: 'translateY(20px)', offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))
        ]),{optional: true})
      ])
    ]);

const animateIn = '0.15s ease-in';
const animateOut = '0.25s ease-out';

const styleIdle = { transform: 'translate3d(0, 0, 0)' };
const styleTop = { transform: 'translate3d(0, -100%, 0)' };
const styleRight = { transform: 'translate3d(100%, 0, 0)' };
const styleBottom = { transform: 'translate3d(0, 100%, 0)' };
const styleLeft = { transform: 'translate3d(-100%, 0, 0)' };

export const HoverContainerAnimations = [
  trigger('hover', [
    state('*', style(styleIdle)),
    transition('* => in-left', [
      style(styleLeft), animate(animateIn)
    ]),
    transition('* => in-right', [
      style(styleRight), animate(animateIn)
    ]),
    transition('* => in-top', [
      style(styleTop), animate(animateIn)
    ]),
    transition('* => in-bottom', [
      style(styleBottom), animate(animateIn)
    ]),
    transition('* => out-right', [
      animate(animateOut, style(styleRight))
    ]),
    transition('* => out-left', [
      animate(animateOut, style(styleLeft))
    ]),
    transition('* => out-top', [
      animate(animateOut, style(styleTop))
    ]),
    transition('* => out-bottom', [
      animate(animateOut, style(styleBottom))
    ]),
  ])
];