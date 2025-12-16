import NewsList from '@/app/_components/NewsList/NewsList';
import { getNewsList } from '@/app/_libs/microcms';
import { notFound } from 'next/navigation';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Pagination from '@/app/_components/Pagination/Pagination';

type Props = {
  params: {
    current: string;
  };
};

export default async function page({ params }: Props) {
  const current = parseInt(params.current, 10);

  if (Number.isNaN(current) || current < 1) {
    notFound();
  }
  // もしもcurrentの値が数字じゃない、もしくは１以下だった時はnotfoundページに飛ばす

  const { contents: news, totalCount } = await getNewsList({
    limit: NEWS_LIST_LIMIT,
    offset: NEWS_LIST_LIMIT * (current - 1),
  });

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <NewsList news={news} />
      <Pagination totalCount={totalCount} current={current} />
    </>
  );
}

// APIを触るときは例外処理、狙っていないことをユーザーがしたときは404ページに飛ばす処理を行う必要があることを覚えておくこと
// マジックナンバーは変数で扱うこと
