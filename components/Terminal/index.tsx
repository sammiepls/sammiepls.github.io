import { useState } from 'react';
import styles from './styles.module.scss';
import classnames from 'classnames';
import Block from './Block';
import data from '../../data.json';

const Terminal = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <article className={styles.terminal}>
      <header className={styles.statusBar}>
        <button className={styles.terminalControls}>
          <span />
        </button>
        <button
          onClick={() => setSelectedTab(0)}
          className={classnames(styles.tab, selectedTab === 0 && styles.active)}
        >
          <h2>Experience</h2>
        </button>
        <button
          onClick={() => setSelectedTab(1)}
          className={classnames(styles.tab, selectedTab === 1 && styles.active)}
        >
          <h2>Education</h2>
        </button>
      </header>
      <section className={styles.content}>
        {selectedTab === 0
          ? data.experience.map((exp) => (
              <Block
                company={exp.company}
                role={exp.role}
                duration={exp.duration}
                description={exp.description}
              />
            ))
          : data.education.map((edu) => (
              <Block
                institute={edu.institute}
                course={edu.course}
                duration={edu.duration}
                major={edu.major}
              />
            ))}
      </section>
    </article>
  );
};

export default Terminal;
