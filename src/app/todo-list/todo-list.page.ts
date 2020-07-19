import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
  
})
export class TodoListPage implements OnInit {



  checkBoolean=false;
  value ='';
  items:any=[]

  constructor(public alertController: AlertController,private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('items')){
      this.items = JSON.parse(localStorage.getItem('items'))  
    }
  }

additem(){
let obj ={
  value: this.value,
  isDone: false
}
this.items.unshift(obj)
localStorage.setItem('items', JSON.stringify(this.items))
this.value=''
  }

// deleteitem(ind){
//   this.items =this.items.filter((c, index)=> index !=ind)
//   localStorage.setItem('items', JSON.stringify(this.items))
 
// }

setDone(index){
 
let item =this.items.find((c, ind) =>ind ==index)
item.isDone =!item.isDone;
this.checkBoolean=true;
localStorage.setItem('checkBoolean', JSON.stringify(true))
console.log(this.checkBoolean);
localStorage.setItem('items', JSON.stringify(this.items))
}


async presentAlertConfirm(ind) {
  const alert = await this.alertController.create({
    cssClass: 'my-custom-class',
    header: 'Are you sure?',
    message: 'You wont be able to revert this!',
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }, {
        text: 'Okay',
        handler: () => {
          this.items =this.items.filter((c, index)=> index !=ind)
  localStorage.setItem('items', JSON.stringify(this.items))
          console.log('Confirm Okay');
        }
      }
    ]
  });

  await alert.present();
}


onBooleanChange(){
  console.log(this.checkBoolean);
}

logout(){
  this.router.navigate(['home']);

}

}
