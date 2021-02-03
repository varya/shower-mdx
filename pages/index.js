import fs from "fs";
import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
// import dynamic from "next/dynamic";
import Head from "next/head";
import path from "path";

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
  return (
    <>
      <div className="shower list">
        <Head>
          <style>
            {`
            .shower {
              --slide-ratio: calc(16 / 9);
            }
          ${frontMatter.style}`}
          </style>
        </Head>
        <header className="caption">
          <h1>{frontMatter.title}</h1>
          {frontMatter.subtitle && <p>{frontMatter.subtitle}</p>}
        </header>
        <div dangerouslySetInnerHTML={{ __html: source.renderedOutput }} />
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
      remarkPlugins: [],
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
