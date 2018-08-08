import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes-and-directives',
  templateUrl: './pipes-and-directives.component.html',
  styleUrls: ['./pipes-and-directives.component.css']
})
export class PipesAndDirectivesComponent implements OnInit {

  showElement: boolean;
  textColors: Array<any>;
  creditCardNo: number;

  constructor() { 
  }

  ngOnInit() {
    this.creditCardNo = 1243984271471094;
    this.textColors = [true,false,false,false,false];
    this.showElement = true;
    setTimeout(() => {
      this.showElement = false;
    }, 5000);

    setInterval(() => {  
      
        if(this.textColors[0] == true)
        {
          this.textColors[0] = false;
          this.textColors[1] = true;
        }
        else if(this.textColors[1] == true)
        {
          this.textColors[1] = false;
          this.textColors[2] = true;
        }
        else if(this.textColors[2] == true)
        {
          this.textColors[2] = false;
          this.textColors[3] = true;
        }
        else if(this.textColors[3] == true)
        {
          this.textColors[3] = false;
          this.textColors[4] = true;
        }
        else if(this.textColors[4] == true)
        {
          this.textColors[4] = false;
          this.textColors[0] = true;
        }
    }, 1000);
  }

  
}
