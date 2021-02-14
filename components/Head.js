import React from "react";
import NextHead from "next/head";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

const Head = ({ title, description, style, meta }) => {
  const url = publicRuntimeConfig?.basePath;

  return (
    <NextHead>
      {/* General tags */}
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      {description && <meta name="description" content={description} />}
      {/* OpenGraph tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      {description && <meta property="og:description" content={description} />}
      {meta?.cover && (
        <meta property="og:image" content={url + "/" + meta.cover} />
      )}
      <meta property="og:type" content="website" />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary" />

      {meta?.twitter && <meta name="twitter:creator" content={meta.twitter} />}
      {meta?.twitter && <meta name="twitter:site" content={meta.twitter} />}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {meta?.cover && (
        <meta name="twitter:image" content={url + "/" + meta.cover} />
      )}
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
