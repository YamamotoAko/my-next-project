import styles from './not-found.module.css';

export default function Notfound() {
  return (
    <div className={styles.container}>
      <dl>
        <dt className={styles.title}>ページが見つかりませんでした</dt>
        <dd className={styles.text}>
          あなたがアクセスしようとしたページは存在しません。
          <br />
          URLを確認して下さい。
        </dd>
      </dl>
    </div>
  );
}
