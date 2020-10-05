import styles from './styles.module.scss';

type BlockProps = {
  company?: string;
  role?: string;
  duration: string;
  description?: string;
  institute?: string;
  course?: string;
  major?: string;
};

const Block: React.FC<BlockProps> = ({
  company,
  role,
  duration,
  description,
  institute,
  major,
  course,
}) => {
  return (
    <article className={styles.block}>
      <header>
        <h3>{company || institute}</h3>
        <h4>
          {role || course} <time>{duration}</time>
        </h4>
      </header>
      <p>{description || major}</p>
    </article>
  );
};

export default Block;
