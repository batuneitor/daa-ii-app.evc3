import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth'; 
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
         apiKey: "AIzaSyCyGDqDed49oQrBGn_HqwnzixDXcrA4CZU",
  authDomain: "da-ii-2025-f681b.firebaseapp.com",
  projectId: "da-ii-2025-f681b",
  storageBucket: "da-ii-2025-f681b.firebasestorage.app",
  messagingSenderId: "411144056296",
  appId: "1:411144056296:web:97d929a5984d2f1a49485d",
  measurementId: "G-N4R3ZM27WQ"
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ]
};
