// src/lib/vapiClient.js
import Vapi from "@vapi-ai/web";

let vapi = null;

export function getVapiInstance() {
  if (!vapi) {
    const publicKey = import.meta.env.VITE_VAPI_PUBLIC_KEY;
    if (!publicKey) throw new Error("VAPI public key not set (VITE_VAPI_PUBLIC_KEY).");
    vapi = new Vapi(publicKey);
  }
  return vapi;
}
