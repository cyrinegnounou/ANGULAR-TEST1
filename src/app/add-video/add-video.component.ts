import { Component, OnInit } from '@angular/core';
import { Video } from '../model/Video';
import { VideoService } from '../services/Video.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {
  video!:Video;

  constructor( private videoservice : VideoService , private route:Router) { }

  ngOnInit(): void {
    this.video=new Video();
  }
 addVideo() {
   /* this.productservice.addProduct(this.produit);
    this.route.navigateByUrl('/products')*/
    this.videoservice.addVideo(this.video).subscribe(
      {
        next:()=>this.route.navigateByUrl('/videos'),
        error:(error)=>console.log('error')
      }
    );
    }
}
