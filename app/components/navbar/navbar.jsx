import styles from "./navbar.module.css";

export const Navbar = () => {
  const menuOpen = true;
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Happily
      </a>
      <div className={styles.menu}>
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}>
          <li>
            <a href="/scales">Scales/Tests</a>
          </li>
          <li>
            <a href="/community">Community</a>
          </li>
          <li>
            <a href="/consultancy">Consultancy</a>
          </li>
          <li>
            <a href="/login">Login/SignUp</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
