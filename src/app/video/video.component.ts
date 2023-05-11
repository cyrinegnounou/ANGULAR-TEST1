import { Component, OnInit } from '@angular/core';
import { VideoService } from '../services/Video.service';
import { Video } from '../model/Video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
  title: string ='Video';
  listvideo!:Video[];

  video!:Video;


  constructor(private videoservice : VideoService ) { }


  ngOnInit(): void {
    this.videoservice.getVideo().subscribe({
      next:(data)=>this.listvideo=data,
        error:(error)=>console.log(error),
        complete:()=>console.log("finishing")
    })
  }
  deleteVideo(id:number){
    this.videoservice.deleteVideo(id).subscribe( );
  }
}
