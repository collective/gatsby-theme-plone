import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import { RichText } from 'gatsby-theme-plone'

const NewsItem = ({ data, images, files }) => (
  <article key={data._id}>
    <h1>{data.title}</h1>
    <Img resolutions={data.image.childImageSharp.fixed} />
    <p>
      <small>
        I am doing component shadowing in this website. Published on <em>{data.created}</em>
      </small>
    </p>
    {data.description ? (
      <p>
        <strong>{data.description}</strong>
      </p>
    ) : null}
    <RichText serialized={data.text.react} images={images} files={files} />
  </article>
);

export default NewsItem;

export const query = graphql`
  fragment NewsItems on PloneNewsItem {
    id
    title
    description
    created(formatString: "MMMM Do, YYYY")
    image {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    text {
      react
    }
    _path
  }
`;
