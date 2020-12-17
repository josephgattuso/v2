import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GitHubIcon from '@material-ui/icons/GitHub';
import IconButton from '@material-ui/core/IconButton';
import shortid from 'shortid';

import Layout from '../components/layout';
import { projects } from '../../data/projects';

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
            {projects.map((project) => (
              <Card key={shortid.generate()}>
                <CardContent>
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                </CardContent>
                <CardActions>
                  {project.url && (
                    <Button
                      size="small"
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      View
                    </Button>
                  )}
                  {project.tryItUrl && (
                    <Button
                      size="small"
                      href={project.tryItUrl}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      Try it out
                    </Button>
                  )}
                  {project.repo && (
                    <IconButton
                      size="small"
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
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
