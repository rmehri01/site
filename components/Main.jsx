import Image from 'next/image';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Socials from './Socials';
import GradientText from './GradientText';
import Paragraph from './Paragraph';

export default function Main() {
  const rgbs = [
    { r: 30, g: 0, b: 255 },
    { r: 112, g: 43, b: 252 },
    { r: 242, g: 59, b: 255 },
    { r: 255, g: 112, b: 118 },
    { r: 29, g: 29, b: 31 },
  ];

  const links = [
    { link: 'https://github.com/rmehri01', icon: faGithub, label: 'GitHub' },
    { link: 'https://www.linkedin.com/in/ryan-mehri/', icon: faLinkedinIn, label: 'LinkedIn' },
    { link: 'mailto:ryan.mehri1@gmail.com', icon: faEnvelope, label: 'Email' },
  ];

  return (
    <main className="flex justify-center items-center w-full flex-1 p-2 lg:p-10 xl:p-20">
      <div className="flex flex-col lg:flex-row-reverse bg-gray-100 rounded-lg p-4 max-w-screen-2xl">
        <div className="relative w-full min-w-[35%] h-96 lg:h-auto">
          <Image className="rounded-lg" src="/profile.jpg" layout="fill" objectFit="cover" alt="A photo of me!" priority />
        </div>

        <div className="flex justify-center flex-col m-2 md:m-5 xl:m-10">
          <h1 className="text-5xl md:text-6xl 2xl:text-7xl font-bold">
            <GradientText text="Hey there!" rgbs={rgbs} />
            {' '}
            👋
            {' '}
            <br className="xl:hidden" />
            I&apos;m Ryan.
          </h1>

          <hr className="origin-left animate-draw m-3" />

          <Paragraph>
            I am a student at the University of British Columbia interested in
            {' '}
            <GradientText text="programming language theory" rgbs={rgbs} delay={2000} />
            ,
            {' '}
            <GradientText text="compilers" rgbs={rgbs} delay={3000} />
            , and
            {' '}
            <GradientText text="developer tooling" rgbs={rgbs} delay={4000} />
            .
          </Paragraph>

          <Paragraph>
            My research will be focused here since I believe this is where some of the most
            interesting, challenging, and beautiful parts of computer science are and require
            a blend of theory and practical knowledge.
          </Paragraph>

          <Paragraph>
            I&apos;m also a fan of functional programming and
            {' '}
            <a className="text-blue-600 hover:text-blue-800" href="https://racket-lang.org" target="_blank" rel="noreferrer">Racket</a>
            {' '}
            of course. 😉
          </Paragraph>

          <Socials links={links} />
        </div>
      </div>
    </main>
  );
}
