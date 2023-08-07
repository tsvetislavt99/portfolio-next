import React from 'react';
import Hero from 'components/Hero';
import { Layout } from 'layout/Layout';
import SectionBreak from 'components/SectionBreak';
import Projects from 'components/Projects';
import Technologies from 'components/Technologies';
import Timeline from 'components/Timeline';
import AboutMe from 'components/AboutMe';
import Recommendations from 'components/Recommendations';
import { NextSeo } from 'next-seo';

export default function IndexPage(): JSX.Element {
  return (
    <>
    <NextSeo
      title="T.Works"
      description="Tsvetislav's personal website."
      openGraph={{
       type: 'website',
       siteName: 'Tsvetislav Todorov Personal Website',
      }}
    />
    <Layout>
      <Hero />
      <SectionBreak />
      <AboutMe />
      <Timeline />
      <Recommendations />
      {/* <SectionBreak /> */}
      {/* <Projects /> */}
      <SectionBreak />
      <Technologies />
      <SectionBreak />
    </Layout>
    </>
  );
}
