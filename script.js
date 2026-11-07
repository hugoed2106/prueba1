import { initializeApp } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-app.js";
import { getFirestore, doc, getDoc, setDoc, increment } from "https://www.gstatic.com/firebasejs/13.0.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCM8fjWstKNjL4l4AbG3Z16xiYVl6s-XAA",
    authDomain: "poemas-jg.firebaseapp.com",
    projectId: "poemas-jg",
    storageBucket: "poemas-jg.firebasestorage.app",
    messagingSenderId: "619654028698",
    appId: "1:619654028698:web:2d59e97d07a7efd643ee23",
    measurementId: "G-QHE41GVRSH"
};

const db = getFirestore(initializeApp(firebaseConfig), "default");
const form = document.getElementById("form");
const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const newCheckbox = document.getElementById("new");
const specialCheckbox = document.getElementById("special");
const authorSelect = document.getElementById("authors");
const poemInput = document.getElementById("poem");

form.addEventListener("submit", async (event) => {
    try {
        const docRef = await addDoc(collection(db, "poemas-publicados"), {
            titulo: titleInput.value,
            fecha: dateInput.value,
            nuevo: newCheckbox.checked,
            especial: specialCheckbox.checked,
            autor: authorSelect.value,
            poema: poemInput.value
        });
        console.log("Documento escrito con ID:", docRef.id);
        } catch (e) {
        console.error("Error al escribir el documento: ", e);
    }
})