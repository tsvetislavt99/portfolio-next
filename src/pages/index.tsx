import React from 'react';
import Hero from 'components/Hero';
import { Layout } from 'layout/Layout';
import SectionBreak from 'components/SectionBreak';
import Projects from 'components/Projects';
import Technologies from 'components/Technologies';
import Timeline from 'components/Timeline';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Hero />
      <SectionBreak />
      <Timeline />
      <SectionBreak />
      <Technologies />
      <SectionBreak />
      <Projects />
      <SectionBreak />
    </Layout>
  );
}
