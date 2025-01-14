import React from 'react'
import styled from 'styled-components/macro'

import projects from 'data/other-projects.json'

// react component

export const OtherProjectCard = () => {
  return (
    <>
      {projects.map((project) => (
        <OtherProjectContainer key={project.id}>
          <a href={project.url} aria-label={project.repo_name} target="_blank" rel="noreferrer">
            <InfoContainer>
              <SubTitle>{project.title}</SubTitle>
              <SubParagraph>
                {project.project_description} <b> &gt;&gt; </b>
              </SubParagraph>
            </InfoContainer>
          </a>
          <SkillTagContainer>
            {project.tags && project.tags.map((tag) => (
              <SkillTag key={tag.id}> {tag.name}</SkillTag>))}
            <RepoTag>
              <a href={project.repo_url} title="link to Nina's Github repo" aria-label={project.repo_name} target="_blank" rel="noreferrer">
                <i className="fab fa-github" alt="GitHub icon" />
              </a>
            </RepoTag>
          </SkillTagContainer>
        </OtherProjectContainer>
      ))}
    </>
  )
}

// styled component

export const OtherProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 0.5em;
  /* border: 2px solid red; */
`;

// ----------------

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* width: 100%; */
  /* border: 2px solid green; */

  &:hover {
    text-decoration: underline;
  }
 `;

// ----------------

export const SkillTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1em 0;
  /* border: 2px solid skyblue; */
`;

// ----------------

export const SkillTag = styled.p`
  background-color: var(--clr-med);
  font-size: 0.8rem;
  border-radius: 3px;
  margin-right: 1em;
  padding: 0.3em 0.75em;
  margin-bottom: 0.5em;
  /* border: 2px solid pink; */
`;

export const RepoTag = styled(SkillTag)`
  background-color: var(--clr-medium);
  width: 3rem;

  &:hover {
    background-color: var(--clr-med);
  }

  a {
    display: flex;
    justify-content: center; 
    height: 100%;
    width: 100%;
  
  }

  i {
    color: var(--clr-white);
    font-size: 1rem;
  }

  i:hover {
    color: var(--clr-darkGray);
  }

  a:hover{
    background-color: var(--clr-med);
  } 
 
`;

// ----------------

export const SubTitle = styled.h4`
  color: var(--clr-medium);
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 0.5em;
  margin-top: 0.5em;

  @media (min-width: 668px) {
    margin-right: 20px;
    /* flex: 0 0 150px; */
  }
`;

// ----------------

export const SubParagraph = styled.p`
  color: var(--clr-darkGray);
  font-size: 1.1rem;
  font-weight: 500;
`;

