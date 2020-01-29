import { Component, OnInit, Inject } from '@angular/core';
import { FRAMEWORK_MODEL_TOKEN } from 'src/app/module/core/model/framework/framework-model.token';
import { FrameworkModelProvider } from 'src/app/module/core/model/framework/framework-model.provider';
import { Framework } from 'src/app/module/core/model/framework/framework.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(@Inject(FRAMEWORK_MODEL_TOKEN) private coinModel: FrameworkModelProvider) { }

  frameworks: Array<Framework>;
  ngOnInit() {
    this.coinModel.getData('');

    this.coinModel.frameworks.subscribe((frameworks) => {
      console.log(frameworks);
      this.frameworks = frameworks;
    });
  }



}
