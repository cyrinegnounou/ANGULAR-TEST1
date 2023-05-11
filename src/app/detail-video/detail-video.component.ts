import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../services/Video.service';
import { Video } from '../model/Video';

@Component({
  selector: 'app-detail-video',
  templateUrl: './detail-video.component.html',
  styleUrls: ['./detail-video.component.css']
})
export class DetailVideoComponent implements OnInit {
  listvideo!:Video[];
  id!:number
  video!:Video
   constructor(private route:ActivatedRoute, private vs : VideoService) { }
 
   ngOnInit(): void {
     this.id=this.route.snapshot.params['id'];
     this.video=this.vs.listvideo[this.id];
     
 
   }
 

}
