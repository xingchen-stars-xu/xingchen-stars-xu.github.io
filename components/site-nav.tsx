import { ArrowUpRight, Menu } from 'lucide-react';

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#research', label: 'Research' },
  { href: '/#publications', label: 'Publications' },
  { href: '/#service-awards', label: 'Services & Recognition' },
];

export function SiteNav() {
  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Primary navigation">
        <a className="wordmark" href="/" aria-label="Xingchen Xu, home">
          Xingchen Xu<span>.</span>
        </a>
        <div className="nav-links">
          {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
        </div>
        <a className="nav-contact" href="mailto:xingche7@asu.edu">
          Get in touch <ArrowUpRight size={15} aria-hidden="true" />
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation"><Menu size={19} aria-hidden="true" /></summary>
          <div>
            {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
          </div>
        </details>
      </nav>
    </header>
  );
}
