import { initializeApp } from "firebase/app";
import { getDatabase, set, ref } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD6SmX5OHRBA-uwRNqU_vnnYyvGgV1g7iA",
  authDomain: "scholarship-df22d.firebaseapp.com",
  projectId: "scholarship-df22d",
  storageBucket: "scholarship-df22d.appspot.com",
  messagingSenderId: "611906384160",
  appId: "1:611906384160:web:a8892161af37a0b36d2745",
  measurementId: "G-0Y6MPN71K7"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase(app);

export function register(registerData) {
  try {
    const dbb = getDatabase();
    set(ref(dbb, "ScholarshipPortalDashboard/users/" + registerData.phoneNumber), {
      name: registerData.name,
      phoneNumber: registerData.phoneNumber,
      email: registerData.email,
      password: registerData.password,
      confirmPassword: registerData.confirmPassword,
      userType: registerData.userType,
      collegeName: registerData.collegeName,
    });
    return true;
  } catch (error) {
    return false;
  }
}

