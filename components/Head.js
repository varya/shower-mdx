import React from "react";
import NextHead from "next/head";

const Head = ({ title, description, style, meta }) => {
  return (
    <NextHead>
      {/* General tags */}
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      {meta?.description && (
        <meta name="description" content={meta.description} />
      )}
      {/* OpenGraph tags */}
      <meta property="og:url" content={meta?.website} />
      <meta property="og:title" content={title} />
      {meta?.description && (
        <meta property="og:description" content={meta.description} />
      )}
      {meta?.cover && <meta property="og:image" content={meta.cover} />}
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />
      {meta?.twitter && <meta name="twitter:creator" content={meta.twitter} />}
      {meta?.twitter && <meta name="twitter:site" content={meta.twitter} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={meta?.description} />
      {meta?.cover && <meta name="twitter:image" content={meta.cover} />}
      <meta name="twitter:image:alt" content={title} />
      <style>
        {`
          body {
            background-color: var(--color-grey);
          }
            .shower {
              --slide-ratio: calc(16 / 9);
            }
          ${style}`}
      </style>
    </NextHead>
  );
};
Head.defaultProps = {
  title: "My Awesome Presentation",
};
export default Head;
