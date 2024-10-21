import styles from './Hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <section
      className={styles.heroSection}
      style={{ backgroundImage: `url('/path-to-your-image.jpg')` }}
    >
      <div className={styles.heroOverlay}></div>
      <div className={styles.heroContent}>
        <div>
          <h1 className="text-4xl font-bold">Welcome to Workspace</h1>
          <p className="mt-2">Explore and manage your profile.</p>
        </div>
        <div className={styles.profileCard}>
          <Image
            src="/profile-image.jpg"
            alt="Profile"
            width={48}
            height={48}
            className={styles.profileImage}
          />
          <p className="mt-2">Onowomano Africa</p>
          <button className={styles.viewProfileButton}>View Profile</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
