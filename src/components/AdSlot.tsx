import { useEffect } from "react";

type AdSlotProps = {
  slot?: string;
  className?: string;
};

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdSlot({ slot, className }: AdSlotProps) {
  const client = import.meta.env.VITE_ADSENSE_CLIENT;

  useEffect(() => {
    if (!client || !slot) {
      return;
    }

    const scriptId = "adsense-script";
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${client}`;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch {
      // AdSense will retry after the script is loaded.
    }
  }, [client, slot]);

  if (!client || !slot) {
    return null;
  }

  return (
    <div className={className}>
      <ins
        className="adsbygoogle block overflow-hidden rounded-2xl border border-border bg-card"
        data-ad-client={client}
        data-ad-format="auto"
        data-ad-slot={slot}
        data-full-width-responsive="true"
      />
    </div>
  );
}
