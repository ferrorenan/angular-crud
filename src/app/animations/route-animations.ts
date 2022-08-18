import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const fader =
    trigger('routerAnimations', [
        transition('* <=> *', [
            query(':enter, :leave', [
                style({

                  position: 'absolute',
                  left: 0,
                  width: '100%',
                  opacity: .7,
                  transform: 'translateX(100%)'
                })
            ]),
            query(':enter', [
                animate('1s ease',
                      style({
                        opacity: 1,
                        transform: 'translateX(0)'
                      })
                    )
            ])
        ])
    ])