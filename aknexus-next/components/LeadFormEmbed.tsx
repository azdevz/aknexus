"use client";

import { useEffect } from "react";

interface LeadFormEmbedProps {
  className?: string;
  minHeight?: string | number;
}

export default function LeadFormEmbed({
  className = "",
  minHeight = 892,
}: LeadFormEmbedProps) {
  useEffect(() => {
    // Inject the form_embed script if not already present in DOM
    const scriptSrc = "https://api.aknexus.co/js/form_embed.js";
    const existing = document.querySelector(`script[src="${scriptSrc}"]`);
    if (!existing) {
      const script = document.createElement("script");
      script.src = scriptSrc;
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const heightVal = typeof minHeight === "number" ? `${minHeight}px` : minHeight;

  return (
    <div className={`w-full overflow-hidden ${className}`} style={{ minHeight: heightVal }}>
      <iframe
        src="https://api.aknexus.co/widget/form/eOtYaK3qTI4zmaKxsEcz"
        style={{
          width: "100%",
          height: "100%",
          minHeight: heightVal,
          border: "none",
          borderRadius: "8px",
          display: "block",
        }}
        id="inline-eOtYaK3qTI4zmaKxsEcz"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Lead form for aknexus.co"
        data-height="892"
        data-layout-iframe-id="inline-eOtYaK3qTI4zmaKxsEcz"
        data-form-id="eOtYaK3qTI4zmaKxsEcz"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Lead form for aknexus.co"
      />
    </div>
  );
}
