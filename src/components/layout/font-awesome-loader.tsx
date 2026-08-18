"use client";

export function FontAwesomeLoader() {
  return (
    <link
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      rel="stylesheet"
      media="print"
      onLoad={(e) => {
        const el = e.currentTarget as HTMLLinkElement;
        el.media = "all";
      }}
    />
  );
}