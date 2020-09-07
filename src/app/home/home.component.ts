import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { BlogAttribute } from '../blog-attribute';
import { MatSort, Sort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  currentUser: any;
  @Input() post:BlogAttribute;
  blogAttributes:BlogAttribute[] = [];
  sortedData:BlogAttribute[];
  constructor( private router: Router,
    private authenticationService: AuthenticationService) {

    this.sortedData = this.blogAttributes.slice();
   }
   sortData(sort: Sort) {
    const data = this.sortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'departure': return compare(a.departure, b.departure, isAsc);
        case 'duration': return compare(a.duration, b.duration, isAsc);
        case 'prize': return compare(a.prize, b.prize, isAsc);
        default: return 0;
  }
});
}
  ngOnInit(): void {
    this.sortedData.push(new BlogAttribute("../../assets/images/download.jpg","DEL New delhi,india","vistara","16:40","02h:23min","20:50","6,253","PAT Patna,india"));
    this.sortedData.push(new BlogAttribute("../../assets/images/images.jpg","PUN Pune,india","spicejet","16:50","02h:00min","18:50","4,293",'DEL New delhi,india'));
    this.sortedData.push(new BlogAttribute("../../assets/images/images.jpg",'PAT Patna,india',"spicejet","21:10","01h:45min","22:50","9,765","DEL New delhi,india"));  }

}
function compare(a: number | String, b: number | String, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
