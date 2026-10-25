"use client";

import { useEffect } from "react";

interface LeadFormEmbedProps {
  className?: string;
  initialHeight?: number;
}

export default function LeadFormEmbed({
  className = "",
  initialHeight = 892,
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

  return (
    <div className={`w-full ${className}`}>
      <iframe
        src="https://api.aknexus.co/widget/form/eOtYaK3qTI4zmaKxsEcz"
        style={{
          width: "100%",
          height: `${initialHeight}px`,
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
        data-height={initialHeight}
        data-layout-iframe-id="inline-eOtYaK3qTI4zmaKxsEcz"
        data-form-id="eOtYaK3qTI4zmaKxsEcz"
        data-cookie-consent="true"
        data-cookie-consent-provider="auto"
        title="Lead form for aknexus.co"
      />
    </div>
  );
}
