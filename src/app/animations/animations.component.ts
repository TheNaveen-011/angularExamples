import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';


export const iconRight = trigger('iconRight', [
  state('closed', style({
    transform: 'scale(0) translateX(30px) rotate(-30deg)',
    opacity: 0
  })),
  state('open', style({
    transform: 'scale(1) translateX(0) rotate(0deg)',
    opacity: 1
  })),
  transition('closed => open', [
    animate('600ms cubic-bezier(0.68, -0.55, 0.27, 1.55)', keyframes([
      style({ transform: 'scale(0) translateX(30px) rotate(-30deg)', opacity: 0, offset: 0 }),
      style({ transform: 'scale(1.1) translateX(-5px) rotate(5deg)', opacity: 1, offset: 0.7 }),
      style({ transform: 'scale(1) translateX(0) rotate(0deg)', opacity: 1, offset: 1.0 })
    ]))
  ]),
  transition('open => closed', [
    animate('400ms ease-in', style({
      transform: 'scale(0) translateX(30px) rotate(-30deg)',
      opacity: 0
    }))
  ])
]);

export const iconLeft = trigger('iconLeft', [
  state('closed', style({
    transform: 'scale(0) translateX(-30px) rotate(30deg)',
    opacity: 0
  })),
  state('open', style({
    transform: 'scale(1) translateX(0) rotate(0deg)',
    opacity: 1
  })),
  transition('closed => open', [
    animate('600ms cubic-bezier(0.68, -0.55, 0.27, 1.55)', keyframes([
      style({ transform: 'scale(0) translateX(-30px) rotate(30deg)', opacity: 0, offset: 0 }),
      style({ transform: 'scale(1.1) translateX(5px) rotate(-5deg)', opacity: 1, offset: 0.7 }),
      style({ transform: 'scale(1) translateX(0) rotate(0deg)', opacity: 1, offset: 1.0 })
    ]))
  ]),
  transition('open => closed', [
    animate('400ms ease-in', style({
      transform: 'scale(0) translateX(-30px) rotate(30deg)',
      opacity: 0
    }))
  ])
]);


@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.scss'],
  animations: [iconRight, iconLeft]
})
export class AnimationsComponent {

 isOpen = false;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  isOpenRight = false;
  isOpenLeft = true;

  toggleRight() { 
    this.isOpenRight = !this.isOpenRight; 
  this.isOpenLeft = !this.isOpenLeft; }
  
  toggleLeft() { this.isOpenLeft = !this.isOpenLeft; }
}
