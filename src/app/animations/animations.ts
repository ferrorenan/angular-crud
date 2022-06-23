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