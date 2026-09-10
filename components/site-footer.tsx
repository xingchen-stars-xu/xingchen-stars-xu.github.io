import { LinkedInIcon } from '@/components/linkedin-icon';

export function SiteFooter() {
  return (
    <footer>
      <div className="section-shell footer-inner">
        <p>© 2026 Xingchen (Stars) Xu</p>
        <p className="footer-links">
          <a className="footer-linkedin" href="https://www.linkedin.com/in/xingchen-stars-xu/" target="_blank" rel="noreferrer">
            <LinkedInIcon size={13} className="linkedin-icon" /> LinkedIn
          </a>
          <span>·</span>
          <a href="https://scholar.google.com/citations?user=phwPotgAAAAJ&hl=en" target="_blank" rel="noreferrer">Google Scholar</a>
          <span>·</span>
          <a href="https://uxfol.io/starsxu" target="_blank" rel="noreferrer">UX Portfolio</a>
        </p>
      </div>
    </footer>
  );
}
