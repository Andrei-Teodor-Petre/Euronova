import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-euronova',
  templateUrl: './euronova.component.html',
  styleUrls: ['./euronova.component.scss']
})
export class EuronovaComponent implements OnInit {

  images: string [] = [];
  animationTimeout : boolean = false;
  constructor() { }

  ngOnInit(): void {
	for (let i = 1; i < 7; i++){
		this.images.push("/assets/carousel_images/poza"+i+".png");
	}
  }

  public swipeCarousel(){
	if(!this.animationTimeout){
		let first_element = this.images.shift();
		if(first_element == undefined){
			console.log("unfound images");
		}
		this.images.push(<string>first_element);
		this.setAnimationTimeout();
}

  }

  public setAnimationTimeout(){
	this.animationTimeout = true;

	setTimeout(() => {
		this.animationTimeout = false;
	},1000);
  }

  public open_link(url: string){
	window.open(url, '_blank').focus();
  }



  mailText:string = "mailto:printuri@gmail.com";
  phoneText: string = "tel:+40722516603";

  mailMe(){
	 // add the links to body
    window.location.href = this.mailText;
  }

  phoneMe(){
	window.location.href = this.phoneText;
  }

}
