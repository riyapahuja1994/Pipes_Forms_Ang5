import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskingPipe'
})
export class MaskingPipePipe implements PipeTransform {
  
  maskedString:string;
  resultString:string;
  transform(value: number): string {
    this.resultString = "";
    this.maskedString = ""+value;
    for(let i=0;i<(this.maskedString.length);i++)
    {
      if(i >= (this.maskedString.length-4))
      {
        this.resultString = this.resultString + this.maskedString.charAt(i);
      }
      else
        this.resultString = this.resultString +'*';
    }
    return this.resultString;
  }

}
