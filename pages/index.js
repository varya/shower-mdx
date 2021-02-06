import fs from "fs";
import { useEffect, useRef } from "react";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import Head from "next/head";
import path from "path";
import Cover from "../components/Cover";

const Slide = ({ children, ...props }) => {
  const firstChild = (Array.isArray(children) ? children[0] : children) || null;
  const isSlideSection = firstChild.props.mdxType === "h2";
  return isSlideSection ? (
    <section
      className={isSlideSection ? "slide" : ""}
      {...props}
      id={firstChild.props.id}
    >
      {children}
    </section>
  ) : (
    children
  );
};

const components = {
  section: Slide,
  // img: ({ src, height, width, ...rest }) => (
  //   // layout="responsive" makes the image fill the container width wise - I find it looks nicer for blog posts
  //   <NextImage
  //     layout="fill"
  //     src={src}
  //     height={height}
  //     width={width}
  //     {...rest}
  //   />
  // ),

  // TODO:
  Cover,

  // Head,
};

export default function PostPage({ content, frontMatter }) {
  const ref = useRef(null);

  useEffect(() => {
    // TODO: temporary hack to force keyboard events work, to be fixed
    const takeFocus = () => ref.current.focus();
    document.getElementById("__next").setAttribute("tabindex", "-1");
    document.getElementById("__next").addEventListener("focus", takeFocus);
    // TODO: temporary hack - adding class to body in order to get access to color variables
    document.body.className = "shower";
    return () => {
      document.getElementById("__next").removeEventListener("focus", takeFocus);
      document.body.className = "";
    };
  });

  return (
    <>
      <Head>
        <style>
          {`
          body {
            background-color: var(--color-grey);
          }
            .shower {
              --slide-ratio: calc(16 / 9);
            }
          ${frontMatter.style}`}
        </style>
      </Head>
      <div
        className="shower list"
        ref={ref}
        tabIndex="-1"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      ></div>
    </>
  );
}

export const getStaticProps = async () => {
  const postFilePath = path.join(process.cwd(), `index.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [
        require("remark-heading-id"),

        require("remark-sectionize"),
      ],
      rehypePlugins: [],
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
