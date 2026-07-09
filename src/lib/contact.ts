import { useState } from "react";

export const WHATSAPP_NUMBER = "+34 684 73 17 62";
export const WHATSAPP_NUMBER_CLEAN = "+34684731762";
export const EMAIL = "admisionesnebula@gmail.com";
export const EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent("Solicitud de diagnóstico — Nebula")}`;
export const INSTAGRAM_URL = "https://instagram.com/nebula.lambda";

export function useCopyPhone() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(WHATSAPP_NUMBER_CLEAN);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore unsupported contexts
    }
  };
  return { copied, copy };
}
