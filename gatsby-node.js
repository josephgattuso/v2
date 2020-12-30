const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPost = path.resolve('./src/templates/blog-post.js');

  return graphql(`
    {
      allMdx {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMdx.nodes;

    // Create page for each Mdx file

    posts.forEach((post) => {
      createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          slug: post.fields.slug,
        },
      });
    });
  });
};

// Create slugs

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    // if my posts have a slug in the frontmatter, it means I've specified what I want it to be.
    // This is where we add our own custom fields to each node
    const generatedSlug = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value: node.frontmatter.slug ? `/${node.frontmatter.slug}/` : generatedSlug,
    });

    // Add it to a collection
    createNodeField({
      name: `collection`,
      node,
      value: getNode(node.parent).sourceInstanceName,
    });
  }
};
