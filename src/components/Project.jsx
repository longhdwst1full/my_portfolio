import styles from "./project.module.scss";
import classNames from "classnames/bind";

const Project = () => {
  const cx = classNames.bind(styles);

  return (
    <section className={cx("work")} id="work project">
      <h2 className={cx("heading")}>
        <i className="fas fa-laptop-code"></i> Projects <span>Made</span>
      </h2>

      <div className={cx("box-container")}>
        <div className={cx("box")}>
          <img
            src="https://jigarsable.netlify.app/assets/images/projects/instagrammern.png"
            alt="project"
          />
          <div className={cx("content")}>
            <div className={cx("tag")}>
              <h3>Flipkart MERN</h3>
            </div>
            <div className={cx("desc")}>
              <p>
                Full-Stack Flipkart with Admin Dashboard and Paytm Payment
                Gateway. MERN Stack WebApp, ready to use for business.
              </p>
              <div className={cx("btns")}>
                <a href="" className={cx("btn")}>
                  <i className="fas fa-eye"></i> View
                </a>
                <a href="" className={cx("btn")}>
                  Code <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("box")}>
          <img
            src="https://jigarsable.netlify.app/assets/images/hero.png"
            alt="project"
          />
          <div className={cx("content")}>
            <div className={cx("tag")}>
              <h3>Flipkart MERN</h3>
            </div>
            <div className={cx("desc")}>
              <p>
                Full-Stack Flipkart with Admin Dashboard and Paytm Payment
                Gateway. MERN Stack WebApp, ready to use for business.
              </p>
              <div className={cx("btns")}>
                <a href="" className={cx("btn")}>
                  <i className="fas fa-eye"></i> View
                </a>
                <a href="" className={cx("btn")}>
                  Code <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("box")}>
          <img
            src="https://jigarsable.netlify.app/assets/images/hero.png"
            alt="project"
          />
          <div className={cx("content")}>
            <div className={cx("tag")}>
              <h3>ResumeGen</h3>
            </div>
            <div className={cx("desc")}>
              <p>
                ReactJS Basic Resume Generator which will generate customized
                resume in few minutes on your requirements.
              </p>
              <div className={cx("btns")}>
                <a href="" className={cx("btn")}>
                  <i className="fas fa-eye"></i> View
                </a>
                <a href="" className={cx("btn")}>
                  Code <i className="fas fa-code"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("viewall")}>
        <a href="/projects" className={cx("btn")}>
          <span>View All</span>
          <i className="fas fa-arrow-right"></i>
        </a>
      </div>
    </section>
  );
};

export default Project;
