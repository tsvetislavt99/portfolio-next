import React from 'react';
import Hero from 'components/Hero';
import { Layout } from 'layout/Layout';
import SectionBreak from 'components/SectionBreak';
import Projects from 'components/Projects';
import Technologies from 'components/Technologies';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Hero />
      <SectionBreak />
      <Technologies />
      <SectionBreak />
      <Projects />
    </Layout>
  );
}
