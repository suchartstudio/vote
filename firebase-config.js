import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMptdLpLEdbeVFKZj82M0gyoV2m_2y5Pk",
  authDomain: "suchartstudio-9a78d.firebaseapp.com",
  databaseURL: "https://suchartstudio-9a78d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "suchartstudio-9a78d",
  storageBucket: "suchartstudio-9a78d.firebasestorage.app",
  messagingSenderId: "953369646185",
  appId: "1:953369646185:web:b99daff25f245c6c6ebef8",
  measurementId: "G-YWVYPZBS47"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);