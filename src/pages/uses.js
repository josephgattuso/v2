import React, { Fragment } from 'react';
import { uses } from '../../content/uses';

import Layout from '../components/layout/layout.component';

const ItemList = ({ items, parentIndex }) => (
  <ul>
    {items.map((item, itemIndex) => (
      <Fragment key={itemIndex}>
        <li key={`parent${parentIndex}-item${itemIndex}`}>
          {item.url ? <a href={item.url}>{item.name}</a> : item.name}
          {item.description ? `: ${item.description}` : item.description}
          {item.attributeList && (
            <ul>
              {item.attributeList.map((attribute, attributeIndex) => (
                <li key={`parent${parentIndex}-item${itemIndex}-attribute${attributeIndex}`}>
                  {attribute.url ? <a href={attribute.url}>{attribute.name}</a> : attribute.name}
                  {attribute.description ? `: ${attribute.description}` : attribute.description}
                </li>
              ))}
            </ul>
          )}
        </li>
      </Fragment>
    ))}
  </ul>
);

const UsesPage = () => {
  const sortList = (list) => {
    return list.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1));
  };

  return (
    <Layout
      page="Uses"
      className="uses-page"
      mainTitle="What I use"
      mainHeroImage="jj-ying-7JX0-bfiuxQ-unsplash"
      mainHeroImageAlt="jj-ying-unsplash"
      invertMainImageFilter={true}
    >
      <div className="wrapper">
        <div className="content-container with-padding">
          <p>
            Here's a comprehensive list of hardware and software that I use on a daily basis to
            create and consume content.
          </p>
          <p>I enjoy trying out new things and this list will be updated accordingly.</p>
          {uses.map((section, sectionIndex) => (
            <Fragment key={sectionIndex}>
              <h2 className="section">{section.name}</h2>
              <p>{section.description}</p>
              {section.categoryList &&
                section.categoryList.map((category, categoryIndex) => (
                  <Fragment key={`category${categoryIndex}`}>
                    <h3>{category.name}</h3>
                    <ItemList
                      items={category.sort ? sortList(category.list) : category.list}
                      parentIndex={sectionIndex}
                    >
                      <p>{section.description}</p>
                    </ItemList>
                  </Fragment>
                ))}
              {section.itemList && (
                <ItemList
                  items={section.sort ? sortList(section.itemList) : section.itemList}
                  parentIndex={sectionIndex}
                />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default UsesPage;
