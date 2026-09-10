import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  GraduationCap,
  Mail,
  Sparkles,
} from 'lucide-react';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { PublicationFilter } from '@/components/publication-filter';
import { LinkedInIcon } from '@/components/linkedin-icon';

const researchAreas = [
  {
    number: '01',
    icon: BrainCircuit,
    title: 'Quantitative Methods for Education',
    text: 'Using rigorous quantitative approaches to understand educational systems and student experiences.',
  },
  {
    number: '02',
    icon: Sparkles,
    title: 'AI-enabled Learning in Engineering Education',
    text: 'Exploring how AI can support responsible, meaningful learning in engineering education.',
  },
  {
    number: '03',
    icon: GraduationCap,
    title: 'Engineering Pathways',
    text: 'Helping engineering students prepare for and successfully transition into the engineering professions.',
  },
];

const peerReview = {
  journals: [
    'Educational Research Review',
    'Human Movement Science',
    'International Journal of Educational Development',
    'International Journal of Educational Research',
    'Journal of International Students',
    'Nurse Education in Practice',
    'International Journal of Management Education',
  ],
  conferences: [
    'American Educational Research Association (AERA) Annual Meeting',
    'American Society for Engineering Education (ASEE) Annual Conference & Exposition',
    'American Society for Engineering Education (ASEE) Student Division Best Paper & Diversity Paper Committee',
    'ASPIRE — The Human Factors and Ergonomics Society (HFES) International Annual Meeting',
    'American Society for Engineering Education (ASEE) Awards Committee — Commission on Diversity, Equity, and Inclusion',
    'Collaborative Network for Engineering and Computing Diversity (CoNECD) Conference',
    'IEEE Frontiers in Education (FIE) Conference',
    'IEEE International Conference on Human-Machine Systems (ICHMS)',
  ],
};

const honors = [
  { year: '2026', title: 'Completion Fellowship', organization: 'Arizona State University' },
  { year: '2025', title: 'Chinese Government Award for Outstanding Self-financed Students Abroad' },
  { year: '2025–2026', title: 'Graduate Research Support Program (GRSP) Award ($2,000)', organization: 'Arizona State University' },
  { year: '2024', title: 'University Graduate Fellowship', organization: 'Arizona State University' },
  { year: '2024', title: 'Science for Development Institute (SCI4DI) Scholar', organization: 'USAID' },
  { year: '2023', title: 'Fulton Fellowship', organization: 'Arizona State University' },
];

export default function Home() {
  return (
    <main>
      <SiteNav />

      <section className="hero section-shell" id="top">
        <div className="star-field" aria-hidden="true">
          <span>✦</span><span>✦</span><span>✦</span><span>✦</span><span>✦</span>
        </div>
        <div className="hero-copy" id="about">
          <h1>Xingchen <em>(Stars)</em> Xu</h1>
          <p className="name-note">Xingchen means “stars” in English—so I go by Stars.</p>
          <div className="hero-bio">
            <p>
              I completed my Ph.D. in Engineering Education Systems &amp; Design at Arizona State University under the guidance of{' '}
              <a href="https://search.asu.edu/profile/4426391" target="_blank" rel="noreferrer">Dr. Li Tan</a>. My research brings together quantitative methods, AI-enabled learning, and engineering pathways. During my M.S. in Human Systems Engineering, I worked with ASU’s{' '}
              <a href="https://learningengineering.asu.edu/" target="_blank" rel="noreferrer">Learning Engineering Institute</a> on interdisciplinary, evidence-based research and educational innovation.
            </p>
          </div>
          <div className="hero-actions">
            <a className="button primary" href="mailto:xingche7@asu.edu">
              <Mail size={16} aria-hidden="true" /> Email me
            </a>
            <a
              className="button secondary"
              href="https://www.linkedin.com/in/xingchen-stars-xu/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="linkedin-icon" /> LinkedIn
            </a>
          </div>
        </div>

        <aside className="portrait-column" aria-label="Profile">
          <div className="portrait-frame">
            <img
              src="/assets/xingchen-xu.jpg"
              alt="Portrait of Xingchen Stars Xu"
              className="portrait"
            />
          </div>
          <div className="portrait-meta">
            <span className="status-dot" />
            <p><strong>Ph.D.</strong><br />Engineering Education Systems &amp; Design</p>
          </div>
          <div className="portrait-journey" aria-label="Educational journey">
            <p className="journey-label">Educational journey</p>
            <div className="journey-track">
              <div className="journey-stop">
                <span />
                <p><strong>2020–2022</strong>UC San Diego<small>B.S. Developmental Psychology</small></p>
              </div>
              <div className="journey-stop">
                <span />
                <p><strong>2023–2024</strong>Arizona State University<small>M.S. Human Systems Engineering</small></p>
              </div>
              <div className="journey-stop current">
                <span />
                <p><strong>2023–2026</strong>Arizona State University<small>Ph.D. Engineering Education Systems &amp; Design</small></p>
              </div>
            </div>
          </div>
        </aside>

        <a className="scroll-cue" href="#research">
          Explore my work <ArrowDownRight size={17} aria-hidden="true" />
        </a>
      </section>

      <section className="section-shell section-block" id="research">
        <div className="section-heading">
          <div>
            <p className="kicker">Research agenda</p>
            <h2>Three areas of inquiry.</h2>
          </div>
          <p>
            Three broad areas connect my work across engineering education.
          </p>
        </div>
        <div className="research-grid">
          {researchAreas.map((area) => {
            const Icon = area.icon;
            return (
              <article className="research-card" key={area.number}>
                <div className="card-topline">
                  <span>{area.number}</span>
                  <Icon size={21} strokeWidth={1.6} aria-hidden="true" />
                </div>
                <h3>{area.title}</h3>
                <p>{area.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="publication-band" id="publications">
        <div className="section-shell section-block">
          <div className="section-heading publication-heading">
            <div>
              <p className="kicker">Scholarship</p>
              <h2>Publications.</h2>
            </div>
            <a href="https://scholar.google.com/citations?user=phwPotgAAAAJ&hl=en" target="_blank" rel="noreferrer" className="inline-link">
              Google Scholar <ArrowUpRight size={15} aria-hidden="true" />
            </a>
          </div>
          <PublicationFilter />
        </div>
      </section>

      <section className="section-shell section-block reviewer-home" id="service-awards">
        <div className="simple-section-title">
          <p className="kicker">Academic service</p>
          <h2>Peer review service.</h2>
        </div>
        <div className="review-service-columns">
          <article>
            <h3>Journals</h3>
            <ul>
              {peerReview.journals.map((journal) => <li key={journal}>{journal}</li>)}
            </ul>
          </article>
          <article>
            <h3>Conferences</h3>
            <ul>
              {peerReview.conferences.map((conference) => <li key={conference}>{conference}</li>)}
            </ul>
          </article>
        </div>
      </section>

      <section className="honors-band" id="honors">
        <div className="section-shell section-block">
          <div className="simple-section-title">
            <p className="kicker">Recognition</p>
            <h2>Grants, fellowships &amp; awards.</h2>
          </div>
          <div className="honors-simple-list">
            {honors.map((item) => (
              <article className="honor-simple-row" key={`${item.year}-${item.title}`}>
                <span>{item.year}</span>
                <p><strong>{item.title}</strong>{item.organization && <> — {item.organization}</>}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
