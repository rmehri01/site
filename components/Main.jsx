import Image from 'next/image';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Socials from './Socials';
import GradientText from './GradientText';

export default function Main() {
  const rgbs = [
    { r: 30, g: 0, b: 255 },
    { r: 112, g: 43, b: 252 },
    { r: 242, g: 59, b: 255 },
    { r: 255, g: 112, b: 118 },
    { r: 29, g: 29, b: 31 },
  ];

  const links = [
    { link: 'https://github.com/rmehri01', icon: faGithub },
    { link: 'https://www.linkedin.com/in/ryan-mehri/', icon: faLinkedinIn },
    { link: 'mailto:ryan.mehri1@gmail.com', icon: faEnvelope },
  ];

  return (
    <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
      <div className="p-3 bg-gray-100 rounded-lg">
        <h1 className="text-6xl font-bold">
          <GradientText text="Hey there!" rgbs={rgbs} />
          👋 I&apos;m Ryan.
        </h1>

        <p className="mt-3 text-2xl">
          I am a student at the University of British Columbia interested in programming
          language theory, compilers, and developer tooling.
        </p>

        <Image src="/profile.jpg" width={144} height={144} alt="A photo of me!" priority />

        <Socials links={links} />
      </div>

    </main>
  );
}
