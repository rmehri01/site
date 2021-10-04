import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Socials({ links }) {
  return (
    <div className="flex justify-around mt-3">
      {links.map(({ link, icon, label }) => (
        <a key={link} href={link} target="_blank" rel="noreferrer" aria-label={label}>
          <FontAwesomeIcon className="text-4xl" icon={icon} />
        </a>
      ))}
    </div>
  );
}
