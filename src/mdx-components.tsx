import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    img: (props) => {
      // eslint-disable-next-line @next/next/no-img-element
      // Force using regular HTML img tag instead of Next.js Image component
      return (
        <img
          {...props}
          className="rounded-lg"
          loading="lazy"
          decoding="async"
        />
      );
    },
    ...components,
  };
}
