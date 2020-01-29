import { Component, OnInit, Input } from '@angular/core';
import { Framework } from 'src/app/module/core/model/framework/framework.interface';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  @Input() public framework: Framework;

  constructor() { }

  ngOnInit() {
    console.log(this.framework);
  }

}
