import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Socials({ links }) {
  return (
    <div className="flex justify-around">
      {links.map(({ link, icon }) => (
        <a href={link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={icon} size="3x" />
        </a>
      ))}
    </div>
  );
}
