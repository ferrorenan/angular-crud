import {
  animate, group,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fader =
    trigger('routerAnimations', [
      transition('Home <=> About', [
        query(':enter, :leave', [
          style({

            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: .7,
            transform: 'translateY(100%)'
          })
        ]),
        query(':enter', [
          animate('1s ease',
              style({
                opacity: 1,
                transform: 'translateY(0)'
              })
          )
        ])
      ]),
      transition('* => MarketList', [
        query(':enter, :leave', [
          style({

            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: .7,
            transform: 'translateY(-100%)'
          })
        ]),
        query(':enter', [
          animate('1s ease',
              style({
                opacity: 1,
                transform: 'translateY(0)'
              })
          )
        ])
      ]),
      transition('MarketList => *', [
        query(':enter, :leave', [
          style({

            position: 'absolute',
            left: 0,
            width: '100%',
            opacity: .7,
            transform: 'translateX(-100%)'
          })
        ]),
        query(':enter', [
          animate('1s ease',
              style({
                opacity: 1,
                transform: 'translateY(0)'
              })
          )
        ])
      ])
    ])