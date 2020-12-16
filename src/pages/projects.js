import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import shortid from 'shortid';
import Layout from '../components/layout';

const PROJECTS = [
  {
    name: 'Project 01',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime.',
    tryItUrl: 'https://github.com',
    repo: 'https://github.com',
  },
  {
    name: 'Project 02',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime.',
    tryItUrl: 'https://github.com',
    repo: 'https://github.com',
  },
  {
    name: 'Project 03',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime.',
    tryItUrl: 'https://github.com',
    repo: 'https://github.com',
  },
  {
    name: 'Project 04',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime.',
    tryItUrl: 'https://github.com',
    repo: 'https://github.com',
  },
  {
    name: 'Project 05',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime.',
    tryItUrl: 'https://github.com',
    repo: 'https://github.com',
  },
  {
    name: 'Project 06',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, maxime.',
    tryItUrl: 'https://github.com',
    repo: 'https://github.com',
  },
];

const ProjectsPage = () => {
  return (
    <Layout
      page="Projects"
      className="projects"
      mainTitle="Projects"
      mainHeroImage="timj-ots0EOYuGtU-unsplash"
      mainHeroImageAlt="timj-unsplash"
      invertMainImageFilter={true}
    >
      <div className="wrapper">
        <div className="content-container with-padding">
          <section className="list-of-projects">
            {PROJECTS.map((experiment) => (
              <Card key={shortid.generate()}>
                <CardContent>
                  <h4>{experiment.name}</h4>
                  <p>{experiment.description}</p>
                </CardContent>
                <CardActions>
                  {experiment.url && (
                    <Button
                      size="small"
                      href={experiment.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </Button>
                  )}
                  {experiment.tryItUrl && (
                    <Button
                      size="small"
                      href={experiment.tryItUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Try it out
                    </Button>
                  )}
                  {experiment.repo && (
                    <IconButton
                      size="small"
                      href={experiment.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="view source on github"
                    >
                      <GitHubIcon />
                    </IconButton>
                  )}
                </CardActions>
              </Card>
            ))}
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectsPage;
