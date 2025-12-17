import { getNewsList } from '@/app/_libs/microcms';
import styles from './page.module.css';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import SearchField from '@/app/_components/SearchField/SearchField';
import NewsList from '@/app/_components/NewsList/NewsList';

type Props = {
  searchParams: {
    q?: string;
  };
};

export default async function page({ searchParams }: Props) {
  const { contents: news } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    q: searchParams.q,
  });

  return (
    <>
      <SearchField />
      <NewsList news={news} />
    </>
  );
}
