import React from 'react'
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from './firebase.config';

const App = () => {
    const uid = "iumU2N64jQS8EO57ugEBF4MMiOw2";

    const handleClick = async () => {
        await setDoc(doc(db, "users", uid), {
            name: "Ankit Seth",
            email: "iam4nkit@gmail.com",
            country: "India"
        });

        alert("Data written successfully");
    }

    const handleFetch = async () => {
        const docRef = doc(db, "users", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            console.log("Username: ", docSnap.data().name);
        } else {
            console.log("No such document!");
        }
    }

    return (
        <div>
            <h1>Hello, {uid}</h1>
            <button onClick={handleClick}>Click me</button>
            <button onClick={handleFetch}>Fetch me</button>
        </div>
    )
}

export default App