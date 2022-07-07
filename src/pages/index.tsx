import React from 'react';
import Hero from 'components/Hero';
import { Layout } from 'layout/Layout';
import SectionBreak from 'components/SectionBreak';
import Projects from 'components/Projects';

export default function IndexPage(): JSX.Element {
  return (
    <Layout>
      <Hero />
      <SectionBreak />
      <Projects />
    </Layout>
  );
}
