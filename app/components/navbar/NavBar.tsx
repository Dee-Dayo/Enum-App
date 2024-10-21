import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.flexCenter} ${styles.spaceBetween}`}>
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <Image src="/enum.png" alt="Enum Logo" width={100} height={32} />
      </div>

      <div className={styles.flexCenter}>
        <Link href="/" className={`${styles.navItem}`}>Home</Link>
        <Link href="/" className={`${styles.navItem} ${styles.active}`}>Workspace</Link>
        <Link href="/" className={styles.navItem}>Resources Library</Link>
      </div>

      <div className={`${styles.flexCenter} ${styles.spaceBetween}`}>
        <Image src="/bell.png" alt="Notifications" width={24} height={24} className={styles.icon} />
        <Image src="/profile.png" alt="Profile" width={32} height={32} className="rounded-full" />
        <span>Onowomano</span>
        <Image src="/arrow_down.png" alt="Dropdown" width={16} height={16} className={styles.icon} />
        <Image src="/group.png" alt="Group" width={16} height={16} className={styles.icon} />
      </div>
    </nav>
  );
};

export default Navbar;
