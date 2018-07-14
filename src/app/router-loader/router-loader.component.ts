import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {interval, of} from 'rxjs';
import {tap} from 'rxjs/internal/operators';

@Component({
  selector: 'app-router-loader',
  templateUrl: './router-loader.component.html',
  styleUrls: ['./router-loader.component.css']
})
export class RouterLoaderComponent implements OnInit {

  public loaderRouterTestValue: string;
  public navigationBackIn = 3;
  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.data
      .subscribe((data: { value: string }) => {
        this.loaderRouterTestValue = data.value;
      });
    interval(1000).subscribe(()=>{
      this.navigationBackIn--;
      if(this.navigationBackIn===0){
        this.router.navigate(['/'])
      }
    })
  }

}
