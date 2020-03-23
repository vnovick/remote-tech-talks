import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer id="footer">
      <ul className="icons">
        {config.socialLinks.map(social => {
          const { icon, name, url } = social;
          return (
            <li key={name}>
              <a href={url} className={`icon ${icon}`}>
                <span className="label">{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="copyright">
        <li>&copy; RemoteTechTalks.</li>
        <li>
          Credits: <a href="http://unsplash.com/">Unsplash</a> +
          <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </footer>
  );
}
