import { FC, useState } from 'react';
import { NavLinkType } from '@/types';
import MobileNavMenu from './MobileNavMenu';
import OpenClose from '../icons/OpenClose';

type MobileHeaderProps = {
  logo: { src: string; alt: string };
  navLinks: NavLinkType[];
};

const MobileHeader: FC<MobileHeaderProps> = ({ logo, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <div className="flex w-full items-center justify-between px-[10%] py-4">
        <a className="z-10" href="/">
          <img
            className="h-12"
            src={logo.src}
            width={80}
            height={100}
            alt={logo.alt}
          />
        </a>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          <OpenClose isOpen={isOpen} />
        </button>
      </div>

      <MobileNavMenu links={navLinks} isOpen={isOpen} />
    </div>
  );
};

export default MobileHeader;
