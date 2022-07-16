import TechnologyCard from 'components/TechnologyCard';
import React from 'react';

export default function Technologies() {
  return (
    <div className="mx-auto max-w-[1240px]">
      <h1 className="py-5 px-5 sm:px-10 text-2xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-dark-primary to-dark-primary/80 dark:from-light-primary dark:to-light-primary/70">
        Technologies
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-5 sm:px-10">
        <TechnologyCard
          title="react"
          description="Framework created by an evil corporation - ✔️"
        />
        <TechnologyCard
          title="redux"
          description="Get it from the store, use it anywhere"
        />
        <TechnologyCard title="typescript" description="Types of types" />
        <TechnologyCard
          title="nodejs"
          description="Running outside the browser"
        />
        <TechnologyCard title="javascript" description="Obviously" />
        <TechnologyCard title="express" description="Who said async?" />
        <TechnologyCard
          title="mongodb"
          description="The Snapchat of Databаses"
        />
        <TechnologyCard title="postgresql" description="A real Database" />
        <TechnologyCard
          title="GraphQL"
          description="You only get what you ask for"
        />
        <TechnologyCard
          title="firebase"
          description="BaaS created by an evil corporation - ✔️"
        />
        <TechnologyCard title="Auth0" description="Authentication made easy" />
        <TechnologyCard title="heroku" description="A cool guy" />
        <TechnologyCard
          title="next.js"
          description="Because preparing things for prod is actually hard"
        />
        <TechnologyCard title="jest" description="Testing is fun" />
        <TechnologyCard
          title="Testing Library"
          description="Testing is fun pt.2"
        />
        <TechnologyCard
          title="CSS"
          description="It's actually a fun thing to write"
        />
        <TechnologyCard title="HTML" description="Semantic tags" />
        <TechnologyCard
          title="Tailwind CSS"
          description="Superhero utility library"
        />
        <TechnologyCard
          title="Babel"
          description="Because you kinda have to, am I  right?"
        />
        <TechnologyCard title="Webpack" description="For bundling" />
        <TechnologyCard title="Git" description="Keeping track" />
        <TechnologyCard title="Jira" description="For ticketing" />
        <TechnologyCard title="Slack" description="Communication is key" />
        <TechnologyCard title="Confluence" description="Documentation" />
      </div>
    </div>
  );
}
