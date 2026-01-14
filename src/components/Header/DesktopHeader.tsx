import { FC } from 'react';
import NavLink from './NavLink';
import { ImageType, NavLinkType } from '@/types';

type DesktopHeaderProps = {
  logo: ImageType;
  navLinks: NavLinkType[];
};

const DesktopHeader: FC<DesktopHeaderProps> = ({ logo, navLinks }) => {
  return (
    <div className="hidden md:flex">
      <div className="mx-auto max-w-5xl px-0 md:px-4 flex justify-between items-center w-full py-4">
        <a className="z-10" href="/">
          <img
            className="h-12"
            src={logo.src}
            width={62}
            height={48}
            alt={logo.alt}
          />
        </a>

        <div className="flex gap-12">
          {navLinks.map((link) => (
            <NavLink key={link.text} link={link} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesktopHeader;
