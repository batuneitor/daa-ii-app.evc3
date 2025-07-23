import { inject, Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { signOut, UserCredential } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class Login {
  private auth = inject(Auth);

  public async login(email: string, password: string) : Promise <UserCredential>{
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  public async logout() : Promise<void>{
    await signOut(this.auth);
  }
}
