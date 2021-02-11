import fs from "fs";
import React, { useEffect, useRef } from "react";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import path from "path";
import * as Components from "../components";

const components = {
  section: Components.Slide,
  ...Components,
};

export default function Presentation({ content, frontMatter, ...props }) {
  console.log("🚀 ~ file: index.js ~ line 15 ~ Presentation ~ props", props);
  const ref = useRef(null);

  useEffect(() => {
    // TODO: temporary hack to force keyboard events work, try to fix better
    const takeFocus = () => ref.current.focus();
    document.getElementById("__next").setAttribute("tabindex", "-1");
    document.getElementById("__next").addEventListener("focus", takeFocus);
    // TODO: temporary hack - adding class to body in order to get access to color variables, search for better solution
    document.body.className = "shower";
    return () => {
      document.getElementById("__next").removeEventListener("focus", takeFocus);
      document.body.className = "";
    };
  });

  return (
    <>
      <Components.Head {...frontMatter} />
      <div
        className="shower list"
        ref={ref}
        tabIndex="-1"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </>
  );
}

export const getStaticProps = async (pr) => {
  const source = fs.readFileSync(`./index.mdx`);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    mdxOptions: {
      remarkPlugins: [
        require("remark-mark-plus"),
        [require("remark-attr"), { enableAtxHeaderInline: false }],
        require("remark-sectionize"),
      ],
    },
    scope: data,
  });

  const presentationHeader = `
    <header class="caption">
      <h1>${data.title}</h1>
      ${data.subtitle && `<p>${data.subtitle}</p>`}
    </header>`;

  const presentationFooter = `
    <footer class="badge">
        <a href="https://github.com/shower/shower">Fork me on GitHub</a>
    </footer>

    <div class="progress"></div>`;

  const presHtml =
    presentationHeader + mdxSource.renderedOutput + presentationFooter;

  return {
    props: {
      content: presHtml,
      frontMatter: data,
    },
  };
};
