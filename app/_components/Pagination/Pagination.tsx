import styles from './Pagination.module.css';
import React from 'react';
import { NEWS_LIST_LIMIT } from '@/app/_constants';
import Link from 'next/link';
type Props = {
  totalCount: number;
  current?: number;
  basePath?: string;
};

export default function pagination({
  totalCount,
  current = 1,
  basePath = '/news',
}: Props) {
  const pages = Array.from(
    { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
    // Math.ceil 余りを切り上げる（45件を1ページ10件ずつ表示する時ページ数は4.5になるので切り上げるという意味。）
    (_, i) => i + 1
  );

  return (
    <nav>
      <ul className={styles.container}>
        {pages.map((p) => (
          <li className={styles.list} key={p}>
            {current! == p ? (
              <Link href={`${basePath}/p/${p}`} className={styles.item}>
                {p}
              </Link>
            ) : (
              <span className={`${styles.item} ${styles.current}`}>{p}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

// ページネーションを使うときは頻出のコード。こうやってすることを覚えておくといいよ。
// const pages = Array.from(
//     { length: Math.ceil(totalCount / NEWS_LIST_LIMIT) },
//     (_, i) => i + 1
// );
