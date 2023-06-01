import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-4">
      <div className="flex items-center">
        <Image
          src="/jello-logo.svg"
          alt="Jello Logo"
          width={100}
          height={100}
        />
      </div>
    </header>
  );
};

export default Header;
