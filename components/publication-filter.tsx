'use client';

import { ArrowUpRight } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

type Publication = {
  type: 'journal' | 'conference';
  year: string;
  title: string;
  authors: string;
  venue: string;
  href?: string;
  status?: string;
};

const publications: Publication[] = [
  {
    type: 'journal', year: '2026', status: 'Under review',
    title: 'Bayesian Estimation for Longitudinal Social Relations Models: A General Framework with Extensions to Multiple Indicators',
    authors: 'Li Tan & Xingchen Xu',
    venue: '',
  },
  {
    type: 'journal', year: '2026', status: 'Under revision',
    title: 'The Impact of Anti-DEI Policies on Undergraduate Engineering Enrollment by Gender and Race — A Difference-in-Differences Analysis',
    authors: 'Yue Bian, Li Tan, Xingchen Xu & Brooke Coley',
    venue: '',
  },
  {
    type: 'journal', year: '2026', status: 'Published online',
    title: 'From Words to Components: Mapping Linguistic Features in Source-Based Writing',
    authors: 'Andrew H. Potter, Scott A. Crossley, Püren Öncel, Laura A. Allen, Xingchen Xu, Renu Balyan, Tracy Arner, Rod D. Roscoe & Danielle S. McNamara',
    venue: 'Assessing Writing, 70, 101108', href: 'https://doi.org/10.1016/j.asw.2026.101108',
  },
  {
    type: 'journal', year: '2026', status: 'Published',
    title: 'Examining College Student Mental Health in Engineering and Computer Science Education: Relevant Factors, Relative Importance, and Demographic Differences',
    authors: 'Xingchen Xu & Li Tan',
    venue: 'European Journal of Engineering Education', href: 'https://doi.org/10.1080/03043797.2026.2671265',
  },
  {
    type: 'conference', year: '2026',
    title: 'Work-in-Progress: Statistical Mindset in Engineering Students',
    authors: 'Samantha Mavunga, Xingchen Xu, Andrew Katz & Li Tan',
    venue: 'ASEE Annual Conference & Exposition', href: 'https://peer.asee.org/61256',
  },
  {
    type: 'journal', year: '2025', status: 'Published',
    title: 'Exploring the Interrelation of Family, Society, and Cultural Influence on International Chinese and Indian STEM Doctoral Students in the U.S.',
    authors: 'Xingchen Xu',
    venue: 'Journal of International Students, 15(10), 1–26', href: 'https://doi.org/10.32674/xjjjeq83',
  },
  {
    type: 'journal', year: '2025', status: 'Published',
    title: 'The Advantage of Regression and Covariate Utilisation over ANOVA in Engineering Education Research',
    authors: 'Li Tan, Siqing Wei, Xingchen Xu & Jason Morphew',
    venue: 'European Journal of Engineering Education, 50(4), 878–908', href: 'https://doi.org/10.1080/03043797.2024.2445277',
  },
  {
    type: 'conference', year: '2025',
    title: 'L2 English and Culture as Factors in College Math Achievement',
    authors: 'Jiachen Gong, Maria Goldshtein, Xingchen Xu, Tracy Arner, Rod D. Roscoe & Danielle S. McNamara',
    venue: 'Proceedings of the Twelfth ACM Conference on Learning @ Scale, pp. 381–386', href: 'https://doi.org/10.1145/3698205.3733957',
  },
  {
    type: 'conference', year: '2025',
    title: 'A Descriptive Study on Biased and Non-Inclusive Language Use in the Engineering Education Research Community',
    authors: 'Xingchen Xu, Anjing Dai & Li Tan',
    venue: 'Collaborative Network for Engineering & Computing Diversity', href: 'https://peer.asee.org/54063',
  },
  {
    type: 'conference', year: '2024',
    title: 'WIP: Examining Psychological Distance Perceptions Towards Advanced Technologies among University Students',
    authors: 'Xingchen Xu, Anjing Dai, Siqing Wei & Li Tan',
    venue: 'IEEE Frontiers in Education Conference', href: 'https://doi.org/10.1109/FIE61694.2024.10893059',
  },
  {
    type: 'conference', year: '2024',
    title: 'Work-in-Progress: A Scoping Literature Review of Theoretical Frameworks on Discrimination Against Asian Engineering Students',
    authors: 'Anjing Dai, Xingchen Xu & Li Tan',
    venue: 'ASEE Annual Conference & Exposition', href: 'https://peer.asee.org/48528',
  },
  {
    type: 'conference', year: '2023',
    title: 'Expanding Quantitative Approaches in Engineering Education Research: Embracing Empirical Bayes for Longitudinal Person-Centered Analysis',
    authors: 'Xingchen Xu, Siqing Wei & Li Tan',
    venue: 'IEEE Frontiers in Education Conference', href: 'https://doi.org/10.1109/FIE58773.2023.10343493',
  },
  {
    type: 'conference', year: '2023',
    title: "Addressing Inequity in the Engineering Education Research Community: Asian Researchers' Signaling Strategies to Counter Discrimination",
    authors: 'Li Tan, Yong Bian, Beijia He, Xingchen Xu & Archit Junaghare',
    venue: 'IEEE Frontiers in Education Conference', href: 'https://doi.org/10.1109/FIE58773.2023.10343051',
  },
  {
    type: 'conference', year: '2023',
    title: 'A Bayesian Approach to Longitudinal Social Relations Model',
    authors: 'Xingchen Xu & Li Tan',
    venue: 'ASEE Annual Conference & Exposition', href: 'https://peer.asee.org/42348',
  },
];

function PublicationRows({ items }: { items: Publication[] }) {
  return <div className="filtered-publications">
    {items.map((item) => {
      const content = <>
        <div className="publication-tags">
          <span className={`type-tag ${item.type}`}>{item.type === 'journal' ? 'Journal' : 'Conference'}</span>
          <span>{item.year}</span>
          {item.status && <span>{item.status}</span>}
        </div>
        <div className="publication-copy"><h3>{item.title}</h3><p><HighlightedAuthors authors={item.authors} /></p>{item.venue && <p className="venue">{item.venue}</p>}</div>
        {item.href && <ArrowUpRight size={18} aria-hidden="true" />}
      </>;
      return item.href
        ? <a className="filtered-publication-row" href={item.href} target="_blank" rel="noreferrer" key={item.title}>{content}</a>
        : <article className="filtered-publication-row" key={item.title}>{content}</article>;
    })}
  </div>;
}

function HighlightedAuthors({ authors }: { authors: string }) {
  const [before, after] = authors.split('Xingchen Xu');
  return <>{before}<strong>Xingchen Xu</strong>{after}</>;
}

export function PublicationFilter() {
  return <Tabs defaultValue="all" className="publication-tabs">
    <TabsList className="publication-tab-list" aria-label="Filter publications">
      <TabsTrigger value="all">All</TabsTrigger>
      <TabsTrigger value="journal">Journal Articles</TabsTrigger>
      <TabsTrigger value="conference">Conference Papers</TabsTrigger>
    </TabsList>
    <TabsContent value="all"><PublicationRows items={publications} /></TabsContent>
    <TabsContent value="journal"><PublicationRows items={publications.filter((item) => item.type === 'journal')} /></TabsContent>
    <TabsContent value="conference"><PublicationRows items={publications.filter((item) => item.type === 'conference')} /></TabsContent>
  </Tabs>;
}
