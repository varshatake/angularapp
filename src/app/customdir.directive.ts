import { Directive, ElementRef, Renderer2} from '@angular/core';

@Directive({
  selector: '[appCustomdir]'
})
export class CustomdirDirective {

  // DI
  constructor(private el: ElementRef,private render:Renderer2) { 
    console.log(el)
   //el.nativeElement.style.backgroundColor = 'gray';
    //el.nativeElement.style.display = 'none'

    render.setStyle(el.nativeElement,'backgroundColor','cadetblue')
  }

}
