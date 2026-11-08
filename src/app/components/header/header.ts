import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

  @ViewChild("mobile_menu") menu!: ElementRef<HTMLElement>;
  @ViewChild("side_menu") checkmenu!: ElementRef<HTMLInputElement>;

  constructor(){}

  public close_mobile_menu(){
    // https://stackoverflow.com/questions/45699783/how-to-programmatically-set-or-reset-checkbox
    // Uncheck the label, making scrolling available again
    this.checkmenu.nativeElement.checked = false
    // PROBLEM:
    // It checks the input but side menu cannot be open once a menu item is clicked
    // Checkbox can be checked, but side menu does not work
  }
}
