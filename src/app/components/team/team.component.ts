import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { TEAM_DATA } from '../../interface/data';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-team',
  imports: [NgFor],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
  teamData:TEAM_DATA={
    title:'',
    members:[],
    watermark:'',
    tagline:''
  }
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getTeamData().subscribe(data => {
      this.teamData = data;
    });
  }
}
