import { Component, OnInit } from '@angular/core';
import { RestService}  from '../rest.service';

@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.css'],
  providers: [RestService]
})
export class CandidateComponent implements OnInit {

  // p:number =1;
  name:string;
  searchname:any;
 page = 1;
  handlePageChange(event) {
    this.page = event;
  }

 members:any[]=[
   
   {"name":"harry", "email":"harry@gmail.com","role":"HR"}
];
  constructor(private serve :RestService ) { 
  }

    //to fetch data
  ngOnInit() {
     this.serve.getmembers().subscribe((response)=>{
      this.members= response 
             
     })
  }



//for select and de-selest
 checks=false;
 bulk(e:any){
  if(e.target.checked==true){
   this.checks=true;
  }
  else{
    this.checks=false;
  }

}

 //for adding data 

  add(name:string,email:string,role:string){

    let newdetail={"name":name ,"email":email, "role":role};
    this.members = this.members.concat(newdetail)

  }

  delete(i:number)
  {
    if(confirm("You want to delete ?")){
      this.members.splice(i,1);
    }  
  }


  delete1(i:number)
  {
    if(confirm("You want to delete all ?")){
      this.members.splice(i,10);
    }  
  }
  
  
  

  // search(){
  //   if(this.name == ""){
  //     this.ngOnInit();
  //   }else{
  //     this.members =this.members.filter(res=>{
  //       return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  //    });
  //   }
  // }


}
