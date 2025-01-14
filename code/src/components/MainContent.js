import React from 'react';
// import styled from 'styled-components'
import { Intro } from './Intro';
import { Tech } from './Tech';
import { Skills } from './Skills';
import { ForMore } from './ForMore';
import { OtherProjects } from './OtherProjects';
import { MyThoughts } from './MyThoughts';
import { FeaturedProjects } from './FeaturedProjects'
// import { ContainerWrapper, SectionWrapper } from 'GlobalStyles'

export const MainContent = () => {
  return (
    <>
      <Intro />
      <Tech />
      <FeaturedProjects />
      <OtherProjects />
      <MyThoughts />
      <Skills />
      <ForMore />
    </>
  )
}