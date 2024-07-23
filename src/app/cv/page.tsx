import Image from "next/image";
import styles from "./page.module.css";


import Link from "next/link";
import CustomSlider from "../../components/CustomSlider/CustomSlider";
import { jobs, jobTitle } from "../../utils/JobCardConstants";
import JobCard from "../../components/JobCard/JobCard";
import {
  technologies,
  vocationalTrainingTitle,
} from "../../utils/VocationalTrainingCardConstants";
import VocationalTrainingCard from "../../components/VocationalTrainingCard/VocationalTrainingCard";
import {
  academicTraining,
  resume,
  contact,
} from "../../utils/personalInformationConstants";

export default async function CV() {
  return (
    <div className={styles.main}>
      <div id="presentation" className={styles.section}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10 my-10">
     
          <div className={` ${styles.presentation_card} `}>
            <h1 className="text-xl font-bold text-left mb-2">{resume.name}</h1>
            <h2>{resume.career}</h2>
            <p>{resume.description}</p>
          </div>
          <div className={` ${styles.presentation_card} `}>
            <h1 className="text-xl font-bold text-left mb-2">{academicTraining.title}</h1>

            {academicTraining.items.map((item, index) => (
              <div key={index} className="mb-3">
                <h2 className="font-semibold">{item.title}</h2>
                {item.description.map((subItem, index) => (
                  <p key={index}>{subItem}</p>
                ))}
              </div>
            ))}
          </div>
          <div className={` ${styles.presentation_card} `}>
            <h1 className="text-xl font-bold text-left ">Contact</h1>

            {contact.items.map((item, index) => (
              <div key={index} className={styles.item_contact}>
                <Image src={item.icon} alt={item.alt}></Image>
                <Link href={item.link} target="_blank">
                  {item.title}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="work_experience" className={styles.section}>
        <div className={styles.cards_section}>
          <h1 className="text-3xl font-bold">{jobTitle}</h1>

          <CustomSlider>
            {jobs.map((job, index) => (
              <JobCard
                key={index}
                title={job.company}
                description={job.position}
                activities={job.activities}
                duration={job.duration}
              ></JobCard>
            ))}
          </CustomSlider>
        </div>
      </div>
      <div id="education" className={styles.section}>
        <div className={styles.cards_section}>
          <h1 className="text-3xl font-bold">{vocationalTrainingTitle}</h1>
          <CustomSlider>
            {technologies.map((technology, index) => (
              <VocationalTrainingCard
                key={index}
                title={technology.title}
                developmentSkils={technology.developmentSkils}
              ></VocationalTrainingCard>
            ))}
          </CustomSlider>
        </div>
      </div>
    </div>
  );
}
