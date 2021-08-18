import {Component, Input, OnChanges, SimpleChanges} from "@angular/core";

@Component({
  templateUrl: "./star.component.html",
  selector: 'app-star',
  styleUrls: ['./star.component.css'],
})

export class  StarComponent implements OnChanges {
  @Input()
  rating: number = 0;
  starWidth: number | undefined;

  ngOnChanges(changes: SimpleChanges) : void{
      this.starWidth = this.rating * 74 /5;
  }
}
