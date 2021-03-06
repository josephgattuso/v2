import styled from 'styled-components';
import tw from 'twin.macro';

export const ArticleDate = styled.p`
  ${tw`text-lg text-gray-500 mb-2 lg:mb-4`}
`;

export const ArticleH1 = styled.h1`
  ${tw`text-4xl text-gray-800 dark:text-gray-100  font-black leading-snug mb-2`}
`;

export const ArticleH2 = styled.h2`
  ${tw`text-gray-800 dark:text-gray-100 mt-8 mb-2 -ml-1 text-3xl font-extrabold`}
`;

export const ArticleH3 = styled.h3`
  ${tw`text-gray-800 dark:text-gray-100 mt-8 mb-2 -ml-1 text-2xl font-bold`}
`;

export const ArticleH4 = styled.h4`
  ${tw`text-gray-800 dark:text-gray-100 mt-8 mb-2 -ml-1 text-xl font-semibold`}
`;

export const ArticleH5 = styled.h5`
  ${tw`text-gray-800 dark:text-gray-100 mt-8 mb-2 -ml-1 text-lg font-medium`}
`;

export const ArticleH6 = styled.h6`
  ${tw`text-gray-800 dark:text-gray-100 mt-8 mb-2 -ml-1 text-base font-semibold`}
`;

export const ArticlePara = styled.p`
  ${tw`text-gray-800 dark:text-gray-100  leading-relaxed text-base xl:text-xl mt-2 mb-4`}
`;

export const ArticleBlockQuote = styled.blockquote`
  ${tw`border-solid border-l-4 border-gray-300 pl-4 leading-relaxed text-lg xl:text-xl`}
`;

export const ArticleUl = styled.ul`
  ${tw`list-disc my-2 ml-4 leading-relaxed text-base xl:text-xl text-gray-800`}
`;

export const ArticleOl = styled.ol`
  ${tw`text-gray-800 dark:text-gray-100  list-decimal my-2 ml-4 leading-relaxed text-base xl:text-xl`}
`;

export const ArticleLi = styled.li`
  ${tw`text-gray-800 dark:text-gray-100 my-1 ml-2 leading-relaxed text-base xl:text-xl`}
`;

export const ArticleStrong = styled.strong`
  ${tw`font-semibold leading-relaxed text-base xl:text-xl`}
`;

export const ArticleEm = styled.em`
  ${tw`italic leading-relaxed text-base xl:text-xl`}
`;

export const ArticleA = styled.a`
  ${tw`border-solid border-b-2 border-blue-400 hover:border-gray-800 font-bold bg-blue-100`}
  transition: border 0.3s ease, color 0.3s ease;
`;

export const NextRead = styled.aside`
  h3 {
    text-transform: uppercase;
  }
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;

    a {
      background: none;
      border-radius: 4px;
      border: 2px solid var(--accent);
      padding: 1rem;
      text-decoration: none;
    }

    a:hover {
      background: var(--accent-secondary);
      color: var(--default-text-inverted);
    }

    .post-preview-container {
      height: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    @media (max-width: 330px) {
      .gatsby-image-wrapper {
        height: 250px;
      }

      h2.post-subtitle {
        color: var(--text-secondary);
        font-size: 0.75rem;
      }

      .post-body {
        figure {
          img {
            height: 250px;
          }
        }
      }

      .container {
        display: grid;
        grid-template-columns: 1fr;
        grid-row-gap: 1rem;
      }
    }
  }
`;
