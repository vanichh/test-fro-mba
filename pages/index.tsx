import { Header } from 'components/header';
import { ModuleList } from 'components/module-list';
import type { NextPage } from 'next';
import Head from 'next/head';
import { ItemModule } from 'util/types/molule';
import { Response } from 'util/types/home-props';
import { ListCart } from 'components/list-cart';

interface IProps {
  data: ItemModule[];
}

const Home: NextPage<IProps> = ({ data }) => {
  return (
    <>
      <Head>
        <title>Специализированные дисциплины</title>
      </Head>
      <Header />
      <main>
        {data.map((item) => (
          <ModuleList data={item} key={item.id} />
        ))}
      </main>
      <ListCart />
    </>
  );
};

export const getStaticProps = async () => {
  const api = 'https://api-moscow-mba.herokuapp.com/products';

  const response = await fetch(api);
  const result: Response[] = await response.json();
  const data = result.reduce<any[]>(
    (acum, { specializedSubjects, slug, title }) => {
      const indexItem = acum.findIndex(({ id }) => id === slug);
      if (indexItem === -1) {
        return !specializedSubjects.length
          ? acum
          : [{ id: slug, title, list: [specializedSubjects] }, ...acum];
      } else {
        if (specializedSubjects.length <= 5) {
          return acum;
        }
        acum[indexItem].list.push(specializedSubjects.slice(5));
        return acum;
      }
    },
    []
  );

  return {
    props: { data },
  };
};

export default Home;
