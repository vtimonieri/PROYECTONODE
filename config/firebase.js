import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import dotenv from "dotenv";

dotenv.config();

let credential;

if (process.env.FIREBASE_PROJECT_ID) {
    credential = cert({
        project_id: process.env.FIREBASE_PROJECT_ID,
        private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        client_email: process.env.FIREBASE_CLIENT_EMAIL
    });
} else {
    const { default: serviceAccount } = await import(
        "./proyectofinalconection.json",
        {
            with: { type: "json" }
        }
    );

    credential = cert(serviceAccount);
}

if (!getApps().length) {
    initializeApp({
        credential
    });
}

const db = getFirestore();

export default db;