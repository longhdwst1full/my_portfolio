import styles from "./css/project.module.scss";
import classNames from "classnames/bind";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../content";
import { motion } from "framer-motion";

const Project = () => {
  const [theme] = useContext(AppContext);

  const cx = classNames.bind(styles);
  const [project, setProject] = useState([]);
  useEffect(() => {
    setProject(theme.projects);
  }, []);

  return (
    <section className={`${cx("work")} pt-20 `} id="project">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        transition={{
          duration: 1,
          // delay: 0.7,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h2 className={cx("heading")}>
          <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
        </h2>
      </motion.div>

      <div className={`${cx("box-container")} text-center`}>
     
        {project &&
          project.map(
            (item, index) =>
              index < 6 && (
                <div key={`${item.url_onl}`} className={`${cx("box")}`}>
                  <img src={item.image} alt={item.name} />
                  <div className={cx("content")}>
                    <div className={cx("tag")}>
                      <h3>{item.name}</h3>
                    </div>
                    <div className={cx("desc")}>
                      <p>{item.description}</p>
                      <div className={cx("btns")}>
                        <a href={item.url_onl} className={cx("btn")}>
                          <i className="fas fa-eye"></i> View
                        </a>
                        <a href={item.url_git} className={cx("btn")}>
                          Code <i className="fas fa-code"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )
          )}
      </div>

      <div className={cx("viewall")}>
        <a href="https://github.com/longhdwst1full" className={cx("btn")}>
          <span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Project;
