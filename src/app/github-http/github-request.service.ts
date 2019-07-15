import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';
import { Repository } from '../repo-class/repository';

@Injectable({
  providedIn:'root'
})
export class GithubRequestService {
  user : User;
  reponame;
  repo;
  
  
  constructor(private http: HttpClient) {
    // this.username = "yareyaska";
    this.user = new User ("", "","",0,0);
    

   }
   // My Api Key
   myUserInfo() {
    interface ApiResponse{
      login: string;
      public_repos: string;
      avatar_url : any;
      html_url: string;
      following : number;
      followers : number;

    }
  
    let promise = new Promise ((resolve,reject)=>{
      
     this.http.get<ApiResponse>(environment.myApiUserUrl).toPromise().then(response=>{
        this.user.username = response.login
        
        this.user.avatar = response.avatar_url
        this.user.html_url = response.html_url
        this.user.followers = response.followers
        this.user.following = response.following


        resolve()

      }, error =>{
        this.user.username = "No such Username"
       
        this.user.avatar = "Can't load image"
        this.user.html_url = "404 page not found"
        this.user.followers = 0
        this.user.following =0

        reject(error)
      }
    )
    })
    return promise
  }




   apiRequest(j) {
     interface ApiResponse{
       login: string;
       public_repos: string;
       avatar_url : any;
       html_url: string;
       following : 0;
       followers : 0;

     }
     var usernameInput  = j
     let promise = new Promise ((resolve,reject)=>{
       
      this.http.get<ApiResponse>(environment.apiUrl +  usernameInput +environment.apiKey).toPromise().then(response=>{
         this.user.username = response.login
         
        //  this.reponame.reponame = response.public_repos
         this.user.avatar = response.avatar_url
         this.user.html_url = response.html_url
         this.user.followers = response.followers
         this.user.following = response.following


         resolve()

       }, error =>{
         this.user.username = "No such Username"
        
         this.user.avatar = "Can't load image"
         this.user.html_url = "404 page not found"
         this.user.followers = 0
         this.user.following = 0

         reject(error)
       }
     )
     })
     return promise
   }



}
