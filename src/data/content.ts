import { ServiceOffering } from '../types';

export const BRAND_NAME = 'Ramay Entertainment';
export const BRAND_TAGLINE = "Central India's Fastest Growing Entertainment Network";
export const BRAND_POSITIONING = 'One network. Multiple media channels. Pan-India brand reach.';

export const CORE_STATS = [
  { value: '3,000+', label: 'Cinema Screens', sub: 'PVR INOX, Cinepolis & top chains' },
  { value: '350+', label: 'Media Websites', sub: 'National & regional digital PR' },
  { value: '16+', label: 'OTT Platforms', sub: 'Global & domestic streaming reach' },
  { value: '500+', label: 'City Update Pages', sub: 'Hyperlocal regional penetration' },
  { value: '100+', label: 'Magazines', sub: 'Prestigious print & digital editions' },
];

export const SERVICE_OFFERINGS: ServiceOffering[] = [
  {
    id: 'media-websites',
    number: '01',
    title: '350+ Media Websites',
    shortDesc: 'Broad digital visibility across categories, search presence and campaign publishing.',
    description:
      'We provide access to a large network of media websites that support broad digital visibility across categories and audiences. This helps brands publish news, announcements, features, and campaign content with strong online reach and search presence.',
    metric: '350+',
    metricLabel: 'Digital News & Media Portals',
    category: 'digital',
    features: [
      'High-authority news & entertainment portals',
      'Guaranteed Google News & search indexation',
      'Editorial feature articles & press releases',
      'Multi-lingual coverage (Hindi, English & Regional)'
    ]
  },
  {
    id: 'magazines',
    number: '02',
    title: '100+ Magazines',
    shortDesc: 'Respected print & digital publication formats for authoritative brand equity.',
    description:
      'Our magazine network gives brands premium visibility in respected print and digital publication formats. This is especially valuable for companies that want to build a more authoritative and professional brand image.',
    metric: '100+',
    metricLabel: 'Print & Digital Publications',
    category: 'digital',
    features: [
      'Lifestyle, business, and entertainment titles',
      'Double-page spreads and executive profile features',
      'Digital e-magazine editions with active readership',
      'Long-tail shelf life and physical distribution'
    ]
  },
  {
    id: 'linkedin-business',
    number: '03',
    title: '40+ Business Media LinkedIn Accounts',
    shortDesc: 'High-impact B2B targeting connecting with CXOs, founders, and investors.',
    description:
      'For B2B communication and professional audience targeting, we use a network of business-focused LinkedIn accounts that help brands connect with decision-makers, founders, investors, professionals, and enterprise audiences.',
    metric: '40+',
    metricLabel: 'Curated Business Channels',
    category: 'b2b-regional',
    features: [
      'Targeted CXO, VC & Founder engagement',
      'Thought-leadership articles and case studies',
      'High organic professional reach across India',
      'Enterprise credibility and B2B lead generation'
    ]
  },
  {
    id: 'city-updates',
    number: '04',
    title: '500+ Local City Update Accounts & Pages',
    shortDesc: 'Hyperlocal community channels across Central India and Tier 1, 2 & 3 cities.',
    description:
      'To strengthen regional and hyperlocal visibility, we distribute brand content through local city update pages and accounts. This allows businesses to build awareness in specific markets and connect with audiences at the city level.',
    metric: '500+',
    metricLabel: 'Hyperlocal City Hubs',
    category: 'b2b-regional',
    features: [
      'Deep penetration in Central India (Indore, Bhopal, Jabalpur, Gwalior, Raipur) & beyond',
      'Local language nuances and community trust',
      'Hyperlocal product launch amplification',
      'City-by-city targeted social distribution'
    ]
  },
  {
    id: 'business-associations',
    number: '05',
    title: '30+ Business Associations',
    shortDesc: 'On-ground presence, industry summits, and direct community networking.',
    description:
      'We also work with business associations to create on-ground brand presence through events, networking opportunities, and industry engagement. This helps brands build trust, visibility, and direct relationships within business communities.',
    metric: '30+',
    metricLabel: 'Partner Industry Bodies',
    category: 'b2b-regional',
    features: [
      'Trade body summits & industrial expos',
      'Direct sponsor integration & keynote slots',
      'B2B merchant and trade network access',
      'High-trust peer networking opportunities'
    ]
  },
  {
    id: 'cinema-screens',
    number: '06',
    title: '3,000+ Cinema Screens',
    shortDesc: 'Unmatched on-screen impact across PVR INOX, Cinepolis, and top chains nationwide.',
    description:
      'Through major cinema networks such as PVR INOX, Cinepolis, and other leading chains, we offer powerful cinema advertising opportunities across a wide screen network. This is an effective medium for mass visibility and high-impact brand recall.',
    metric: '3,000+',
    metricLabel: 'Multiplex & Single Screens',
    category: 'cinema-ott',
    features: [
      'On-screen commercial slots (pre-show & interval)',
      'Lobby video walls, standees & kiosk sampling',
      'Blockbuster movie alignment for maximum footfall',
      'Central India & Pan-India screen selection'
    ]
  },
  {
    id: 'ott-platforms',
    number: '07',
    title: '16+ OTT Platforms',
    shortDesc: 'Distribution across leading digital streaming services for domestic and global viewers.',
    description:
      'Our OTT distribution network supports brand communication across India and international audiences through multiple streaming platforms. This helps brands reach modern digital viewers in an engaging entertainment environment.',
    metric: '16+',
    metricLabel: 'Streaming Networks',
    category: 'cinema-ott',
    features: [
      'Video on Demand (VOD) pre-roll & mid-roll slots',
      'Web series & movie sponsorship integrations',
      'Connected TV (CTV) living room audiences',
      'Global Indian diaspora distribution'
    ]
  },
  {
    id: 'jiohotstar',
    number: '08',
    title: 'JioHotstar Brand Commercials',
    shortDesc: 'Precision video advertising with Pan-India as well as hyper-focused PIN-code targeting.',
    description:
      'We provide brand commercial distribution through JioHotstar with India-wide targeting as well as PIN-code-wise targeting, allowing brands to run more focused and location-specific campaigns based on their business goals.',
    metric: 'PIN-Code',
    metricLabel: 'Precision Micro-Targeting',
    category: 'digital',
    features: [
      'India-wide high-reach live sports & entertainment',
      'Micro PIN-code level audience clustering',
      'High completion rates on premium mobile & CTV',
      'Detailed impression analytics and click-through metrics'
    ]
  },
  {
    id: 'video-production',
    number: '09',
    title: 'Video Production Services',
    shortDesc: 'End-to-end studio production: Podcasts, Brand shoots, Ad films, Reels & Interviews.',
    description:
      'We also offer complete video production support, including Podcasts, Brand shoots, Product shoots, Ad films, Reels, and Interviews. This ensures that brands not only distribute content effectively but also create high-quality material that reflects their identity and message professionally.',
    metric: '360°',
    metricLabel: 'Creative & Technical Studio',
    category: 'production',
    features: [
      'Podcasts & Multi-cam Talkshows',
      'High-end Brand & Product Shoots',
      'Cinematic Ad Films for TV, Cinema & Digital',
      'High-engagement Social Media Reels & Executive Interviews'
    ]
  }
];

export const ENTERTAINMENT_SERVICES = [
  {
    title: 'Web Series Production',
    desc: 'From concept script, casting, production to post-production and OTT syndication.',
    badge: 'Originals'
  },
  {
    title: 'TV Serials & Shows',
    desc: 'Compelling television programming crafted for prime regional and national broadcasters.',
    badge: 'Broadcast'
  },
  {
    title: 'Talkshows & Podcasts',
    desc: 'Thought-provoking interview series with celebrities, business leaders, and cultural icons.',
    badge: 'Studio'
  },
  {
    title: 'Music Albums',
    desc: 'Music composition, recording, video direction, audio distribution, and Spotify/YouTube PR.',
    badge: 'Audio-Visual'
  },
  {
    title: 'Film Promotion & PR',
    desc: 'Fast-track bridge between cinema release, press, digital influencers, and the audience.',
    badge: 'PR & Buzz'
  },
  {
    title: 'Multiplatform Release',
    desc: 'Strategic digital platforms for releasing music, movies, and serials across India.',
    badge: 'Distribution'
  }
];

export const WHY_CHOOSE_US_POINTS = [
  {
    title: 'Increase Visibility Across India',
    desc: 'Reach every corner of the nation from Tier 1 metros to Tier 2 & Tier 3 regional heartlands through cinema, OTT, and local update hubs.'
  },
  {
    title: 'Strengthen Brand Authority',
    desc: 'Position your business in 100+ prestigious magazines, 350+ media news websites, and verified business LinkedIn channels.'
  },
  {
    title: 'Connect with Right Audience Segments',
    desc: 'Laser-focus your campaigns by demography, interests, cinema-goers, digital streamers, or micro-targeted PIN codes on JioHotstar.'
  },
  {
    title: 'Improve Campaign Impact',
    desc: 'Replace fragmented, single-channel ads with a cohesive multi-touchpoint media blitz that compounds recall and conversion.'
  },
  {
    title: 'Maintain Consistent Presence Across Channels',
    desc: 'Deliver a unified brand voice across digital websites, cinema screens, print media, social feeds, and live business summits.'
  }
];
