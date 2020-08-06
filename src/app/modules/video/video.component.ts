import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
//import Peer from 'peerjs';

declare const Peer: any;

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {

  @ViewChild('myvideo', { static: true }) myVideo: any;

  anotherId;
  peerID;
  peer;

  constructor() { }

  ngOnInit(){

    let video = this.myVideo.nativeElement;

    console.log(video)

    this.peer = new Peer();
    setTimeout(()=>{
        this.peerID = this.peer.id;
        console.log("id", this.peer.id);
    }, 2000);

    this.peer.on('connection', function(conn){
      conn.on('data', function(data){
        console.log(data);
      })
    });

    let n = <any>navigator;
    n.getUserMedia = (n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia);

    this.peer.on('call', (call)=>{

      n.getUserMedia({video: true, audio: true}, (stream)=>{
        call.answer(stream);
        call.on('stream', (remoteStream)=>{
          video.srcObject = remoteStream;
          video.play();
        })
      }, function(error){
          console.log("error : ", error)
      })
    })

  }




  connect(){
    console.log("anotherId", this.anotherId)
    let conn = this.peer.connect(this.anotherId);
    conn.on('open', function(){
      conn.send('Hello from other world');
    });

  }


  videoConnect(){
    let video = this.myVideo.nativeElement;
    let local = this.peer;
    let fName = this.anotherId;

    let n = <any>navigator;

    n.getUserMedia =( n.getUserMedia || n.webkitGetUserMedia || n.mozGetUserMedia);

    n.getUserMedia({video: true, audio: true}, (stream) => {
      const call = local.call(fName, stream);
      call.on('stream', (remoteStreem) => {
         video.srcObject = remoteStreem;
         video.play();
      });
    }, (err) => {
      console.error('Failed to get local stream', err);
    });

  }



}
