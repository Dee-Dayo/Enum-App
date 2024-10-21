import Link from 'next/link';
import Image from 'next/image';
import styles from './NavBar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`${styles.flexCenter} ${styles.spaceBetween}`}>
        <Image src="/logo.png" alt="Logo" width={32} height={32} />
        <span className="text-blue-600 font-semibold text-lg">enum</span>
      </div>

      <div className={styles.flexCenter}>
        <Link href="/" className={styles.navItem}>Home</Link>
        {/* Uncomment the lines below when those routes are available */}
        {/*<Link href="/workspace" className={styles.navItem}>Workspace</Link>*/}
        {/*<Link href="/resources" className={styles.navItem}>Resources Library</Link>*/}
      </div>

      <div className={`${styles.flexCenter} ${styles.spaceBetween}`}>
        <Image src="/profile.png" alt="Profile" width={32} height={32} className="rounded-full" />
        <span>Onowomano</span>
        <button className={styles.profileButton}>View Profile</button>
      </div>
    </nav>
  );
};

export default Navbar;
