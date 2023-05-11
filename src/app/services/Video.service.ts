import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../model/Video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
    listvideo!:Video[];
    url:string='http://localhost/3000/videos';

    constructor(private http:HttpClient) { 
  
        this.listvideo= [
          {id:1,title:'video1',genre:'horreur',public:true,nbrShared:2}

        ]
      }



    getVideo(){
      return this.http.get<Video[]>(this.url);
    }
  
    getVideoById(){
      return this.http.get<Video>(this.url+'/id');
    }
  
    addVideo(video: Video){
      return this.http.post(this.url,video);
    }
  
    updateVideo(video:Video, id:number){
      return this.http.put<Video>(this.url +'/id', video);
    }
    deleteVideo(id:number){
      return this.http.delete<Video>(this.url +'/id');
    }
}
