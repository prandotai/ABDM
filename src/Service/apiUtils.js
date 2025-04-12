import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { ABMD_PUBLIC_KEY, CLIENT_Id, CLIENT_SECRET } from "../config";

export const encryptString = async (plainText) => {

    try {
        const keyData = ABMD_PUBLIC_KEY
            .replace(/-----BEGIN PUBLIC KEY-----/, "")
            .replace(/-----END PUBLIC KEY-----/, "")
            .replace(/\n/g, "");
        const binaryDer = Uint8Array.from(atob(keyData), (c) => c.charCodeAt(0));
        const publicKey = await window.crypto.subtle.importKey(
            "spki",
            binaryDer.buffer,
            {
                name: "RSA-OAEP",
                hash: { name: "SHA-1" },
            },
            true,
            ["encrypt"]
        );

        const encoder = new TextEncoder();
        const encodedData = encoder.encode(plainText);
        const encryptedData = await window.crypto.subtle.encrypt(
            { name: "RSA-OAEP" },
            publicKey,
            encodedData
        );

        const encryptedBase64 = btoa(
            String.fromCharCode(...new Uint8Array(encryptedData))
        );
        return encryptedBase64;
    } catch (err) {
        console.error("Encryption Error:", err);
        throw new Error("Failed to encrypt string.");
    }
};

export const createSession = async () => {
    const Backend_token = localStorage.getItem('Backend_token');
    try {
        const response = await axios.post(
            "/abdm/sessions",
            {
                request :{
                    clientId: CLIENT_Id,
                    clientSecret: CLIENT_SECRET,
                    grantType: "client_credentials",
                },
                header: {
                    "Content-Type": "application/json",
                    "REQUEST-ID": uuidv4(),
                    "TIMESTAMP": new Date().toISOString(),
                    "X-CM-ID": "sbx",
                },
                
            },
            {
                headers: {
                    'Content-Type'  : 'application/json',
                    'Authorization' : `Bearer ${Backend_token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Session Creation Error:", error);
        throw new Error("Failed to create session.");
    }
};

export const getAbhaProfile = async (accessToken, x_token) => {
    const Backend_token = localStorage.getItem('Backend_token');
    try {
        const response = await axios.post(
            "/abdm/getAbhaprofile",
            {
                header: {
                    "Content-Type": "application/json",
                    "REQUEST-ID": uuidv4(),
                    "TIMESTAMP": new Date().toISOString(),
                    "X-token": "Bearer " + x_token,
                    'Authorization': 'Bearer ' + accessToken,
                },
                
            },
            {
                headers: {
                    'Content-Type'  : 'application/json',
                    'Authorization' : `Bearer ${Backend_token}`,
                },
            }
        );
        return response.data;
    } catch (error) {
        console.error("Session Creation Error:", error);
        throw new Error("Failed to create session.");
    }
};
