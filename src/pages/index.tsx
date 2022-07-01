import { Layout } from 'layout/Layout';
import dbConnect from 'lib/dbConnect';

export default function IndexPage({ meow }) {
  return (
    <Layout>
      <p className="font-space">Meow</p>
    </Layout>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  /* find all the data in our database */

  return { props: { meow: 'hi' } };
}
