import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChatService } from '../../core/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  user_id;
  users;
  messages = [
    { "message": "Hello" },

  ]
  chatSocket;


  getUser() {
    try {
      this.user_id = localStorage.getItem('user_id')
      this.users = JSON.parse(localStorage.getItem('users'))
    }
    catch{
      return
    }
  }
  constructor(private cs: ChatService) {
    this.getUser();
    this.chatSocket = new WebSocket('ws://192.168.1.42:8000/ws/chat/' + this.user_id + '/');
  }



  sendMessage(data) {
    alert(JSON.stringify(data.value))
    this.chatSocket.send(JSON.stringify({
      'msg': data.value.msg,
      'send_by': this.user_id,
      'send_to': data.value.send_to
    }));
    this.messages.push({ "message": data.value.msg })
  }

  loginForm = new FormGroup({
    phone: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  })


  msgForm = new FormGroup({
    msg: new FormControl('', Validators.required),
    send_to: new FormControl('', Validators.required),
  })

  loginMe(data) {
    // alert(data.value)
    this.cs.userSignIn(data.value).subscribe(resp => {
      // alert(resp.data.token)
      localStorage.setItem('user_id', resp.data.id)
      this.user_id = resp.data.id
      this.users = resp.data.users
      localStorage.setItem('users', JSON.stringify(resp.data.users))
    })
  }

  openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  closeForm() {
    document.getElementById("myForm").style.display = "none";
  }
  ngOnInit() {
  }

}


