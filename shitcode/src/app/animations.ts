import {animate, animateChild, group, query, state, style, transition, trigger} from '@angular/animations';

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('WelcomePage => QuestionPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('100ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('QuestionPage => ReportPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('100ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);

export const fadeInOutAnimation =
  // fade in & fade out animation + fixed position
  trigger('fadeInOut', [
    state('notAnswered', style({ opacity: 0 })),
    state('Answered', style({ opacity: 1 })),
    transition('notAnswered => Answered', [
      animate('500ms')
    ]),
    transition('Answered => notAnswered', [
      animate('500ms')
    ])
  ]);

export const flyInOutAnimation =
  trigger('flyInOut', [
    state('in', style({ transform: 'translateX(0)' })),
    transition('void => *', [
      style({ transform: 'translateX(-100%)' }),
      animate(100)
    ]),
    transition('* => void', [
      animate(100, style({ transform: 'translateX(100%)' }))
    ])
  ]);


