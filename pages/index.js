import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sino</title>
        <meta name="description" content="Sinothando Mabhena's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          hi, i&apos;m <a>sino</a>
        </h1>

        <p className={styles.description}>i&apos;m a software engineer 🚀</p>

        <div className={styles.grid}>
          <div className="mt-10">
            <h1 className="ml-5 text-2xl font-bold">/ about me</h1>
            <div className={styles.cardabout}>
              <p className="text-gray-700">
                I&apos;m a software engineer based in{" "}
                <a
                  href="https://en.wikipedia.org/wiki/Pretoria"
                  className="font-semibold"
                >
                  Pretoria, South Africa
                </a>
                . I have profound interest in frontend development, UI design,
                human-computer interaction, and everything in between. I studied
                Bsc Information & Knowledge Systems at the{" "}
                <a
                  href="https://www.up.ac.za/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold"
                >
                  University of Pretoria
                </a>
              </p>
              <p className="text-md my-3 text-gray-700">
                Here are some technologies I have been working with:
              </p>
              <div className="flex flex-row">
                <ul className="list-disc px-4 text-gray-700">
                  <li>Swift</li>
                  <li>React</li>
                  <li>React Native</li>
                </ul>
                <ul className="list-disc px-4 mx-5 text-gray-700">
                  <li>Next</li>
                  <li>JavaScript</li>
                  <li>HTML &amp; CSS</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-10">
            <h1 className="ml-5 text-2xl font-bold">/ experience</h1>
            <div className={styles.card}>
              <h2 className="font-semibold">
                Junior Software Developer @{" "}
                <a href="https://teamgeek.io/">Teamgeek</a>
              </h2>
              <p className="text-md mb-4 text-gray-500">Jan 2021 - Dec 2021</p>
              <p className="text-gray-700">
                Developed and maintained frontend mobile responsive web
                applications built in React. In addition to React,
                styled-components was used for styling and also made use of
                apollo to interact with a GraphQL API. Also worked on a cross
                platform mobile application built in React Native
              </p>
              <p className="text-md mt-4 text-gray-500">Worked on:</p>
              <ul>
                <li>
                  <a
                    href="https://www.wearecolab.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    wearecolab.com
                  </a>
                  <span className="text-gray-400"> &rarr; React</span>
                </li>
                <li>
                  <a
                    href="https://www.yoco.com/za/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    yoco.com
                  </a>
                  <span className="text-gray-400">
                    {" "}
                    &rarr; Quality Assurance
                  </span>
                </li>
                <li>
                  <a
                    href="https://www.bettr.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    bettr.app
                  </a>
                  <span className="text-gray-400"> &rarr; React Native</span>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.card}>
            <h2 className="font-semibold">
              Graduate Software Engineer @{" "}
              <a href="https://www.dvt.co.za/">DVT</a>
            </h2>
            <p className="text-md mb-5 text-gray-500">Feb 2022 - Present</p>
            <p className="text-gray-700">
              Developing iOS mobile applications as part of a twelve-month
              graduate programme that provides extensive coaching. In addition
              to skills in software engineering technology, the programme
              includes soft skills coaching, training and experience in Agile,
              which is done in collaboration with the DVT Academy.
            </p>
            <p className="text-md mt-4 text-gray-500">Worked on:</p>
            <ul>
              <li>
                <a
                  href="https://github.com/smabhena/mooov"
                  target="_blank"
                  rel="noreferrer"
                >
                  github.com/smabhena/mooov
                </a>
                <span className="text-gray-400">
                  {" "}
                  &rarr; Swift (in progress)
                </span>
              </li>
              <li>
                <a
                  href="https://hennopsrevival.co.za/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Hennops Revival iOS app
                </a>
                <span className="text-gray-400">
                  {" "}
                  &rarr; Swift (in progress)
                </span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p className="text-gray-400">created by sinothando mabhena</p>
      </footer>
    </div>
  );
}
