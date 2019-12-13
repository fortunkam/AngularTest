import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'show-user-component',
  templateUrl: './show-user.component.html'
})
export class ShowUserComponent {
    public userData: UserData;
    constructor(http: HttpClient) {
        http.get<UserData[]>('/.auth/me').subscribe(response => {
            console.log(response);
            this.userData = response[0];         
        }, error => console.error(error));
      }
}

interface UserClaim {
    typ: string;
    val: string;
}

interface UserData {
    access_token: string;
    expires_on: string;
    id_token: string;
    provider_name: string;
    refresh_token: string;
    user_id:string;
    user_claims: UserClaim[];
  }
