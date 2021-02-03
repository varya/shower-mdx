import fs from "fs";
import { useEffect } from "react";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
// import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";

const Slide = ({ children, ...props }) => {
  const firstChild = (Array.isArray(children) ? children[0] : children) || null;
  const isSlideSection = firstChild.props.mdxType === "h2";
  return isSlideSection ? (
    <section className={isSlideSection ? "slide" : ""} {...props}>
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
  // TestComponent: dynamic(() => import('../../components/TestComponent')),
  // Head,
};

export default function PostPage({ source, frontMatter }) {
  // Hack. Adding class to body in order to get access to color variables
  // Doing it inside useEffect because first shower.js needs to parse the DOM and find right container of the slides
  useEffect(() => {
    document.body.className = "shower";
    return () => {
      document.body.className = "";
    };
  });

  const presentationHeader = `
    <header class="caption">
      <h1>${frontMatter.title}</h1>
      ${frontMatter.subtitle && `<p>${frontMatter.subtitle}</p>`}
    </header>`;

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
        dangerouslySetInnerHTML={{
          __html: presentationHeader + source.renderedOutput,
        }}
      >
        {/* <header className="caption">
          <h1>{frontMatter.title}</h1>
          {frontMatter.subtitle && <p>{frontMatter.subtitle}</p>}
        </header> */}
        {/* <div dangerouslySetInnerHTML={{ __html: source.renderedOutput }} /> */}
      </div>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(process.cwd(), `index.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await renderToString(content, {
    components,
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [require("remark-sectionize")],
      rehypePlugins: [],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};
