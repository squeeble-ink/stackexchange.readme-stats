const nameMap = {
  stackoverflow: 'Stack Overflow',
  serverfault: 'Server Fault',
  superuser: 'Super User',
  meta: 'Meta Stack Exchange',
  webapps: 'Web Applications',
  'webapps.meta': 'Web Applications Meta',
  gaming: 'Arqade',
  'gaming.meta': 'Arqade Meta',
  webmasters: 'Webmasters',
  'webmasters.meta': 'Webmasters Meta',
  cooking: 'Seasoned Advice',
  'cooking.meta': 'Seasoned Advice Meta',
  gamedev: 'Game Development',
  'gamedev.meta': 'Game Development Meta',
  photo: 'Photography',
  'photo.meta': 'Photography Meta',
  stats: 'Cross Validated',
  'stats.meta': 'Cross Validated Meta',
  math: 'Mathematics',
  'math.meta': 'Mathematics Meta',
  diy: 'Home Improvement',
  'diy.meta': 'Home Improvement Meta',
  'meta.superuser': 'Meta Super User',
  'meta.serverfault': 'Meta Server Fault',
  gis: 'Geographic Information Systems',
  'gis.meta': 'Geographic Information Systems Meta',
  tex: 'TeX - LaTeX',
  'tex.meta': 'TeX - LaTeX Meta',
  askubuntu: 'Ask Ubuntu',
  'meta.askubuntu': 'Ask Ubuntu Meta',
  money: 'Personal Finance &amp; Money',
  'money.meta': 'Personal Finance &amp; Money Meta',
  english: 'English Language &amp; Usage',
  'english.meta': 'English Language &amp; Usage Meta',
  stackapps: 'Stack Apps',
  ux: 'User Experience',
  'ux.meta': 'User Experience Meta',
  unix: 'Unix &amp; Linux',
  'unix.meta': 'Unix &amp; Linux Meta',
  wordpress: 'WordPress Development',
  'wordpress.meta': 'WordPress Development Meta',
  cstheory: 'Theoretical Computer Science',
  'cstheory.meta': 'Theoretical Computer Science Meta',
  apple: 'Ask Different',
  'apple.meta': 'Ask Different Meta',
  rpg: 'Role-playing Games',
  'rpg.meta': 'Role-playing Games Meta',
  bicycles: 'Bicycles',
  'bicycles.meta': 'Bicycles Meta',
  softwareengineering: 'Software Engineering',
  'softwareengineering.meta': 'Software Engineering Meta',
  electronics: 'Electrical Engineering',
  'electronics.meta': 'Electrical Engineering Meta',
  android: 'Android Enthusiasts',
  'android.meta': 'Android Enthusiasts Meta',
  boardgames: 'Board &amp; Card Games',
  'boardgames.meta': 'Board &amp; Card Games Meta',
  physics: 'Physics',
  'physics.meta': 'Physics Meta',
  homebrew: 'Homebrewing',
  'homebrew.meta': 'Homebrewing Meta',
  security: 'Information Security',
  'security.meta': 'Information Security Meta',
  writing: 'Writing',
  'writing.meta': 'Writing Meta',
  video: 'Video Production',
  'video.meta': 'Video Production Meta',
  graphicdesign: 'Graphic Design',
  'graphicdesign.meta': 'Graphic Design Meta',
  dba: 'Database Administrators',
  'dba.meta': 'Database Administrators Meta',
  scifi: 'Science Fiction &amp; Fantasy',
  'scifi.meta': 'Science Fiction &amp; Fantasy Meta',
  codereview: 'Code Review',
  'codereview.meta': 'Code Review Meta',
  codegolf: 'Code Golf',
  'codegolf.meta': 'Code Golf Meta',
  quant: 'Quantitative Finance',
  'quant.meta': 'Quantitative Finance Meta',
  pm: 'Project Management',
  'pm.meta': 'Project Management Meta',
  skeptics: 'Skeptics',
  'skeptics.meta': 'Skeptics Meta',
  fitness: 'Physical Fitness',
  'fitness.meta': 'Physical Fitness Meta',
  drupal: 'Drupal Answers',
  'drupal.meta': 'Drupal Answers Meta',
  mechanics: 'Motor Vehicle Maintenance &amp; Repair',
  'mechanics.meta': 'Motor Vehicle Maintenance &amp; Repair Meta',
  parenting: 'Parenting',
  'parenting.meta': 'Parenting Meta',
  sharepoint: 'SharePoint',
  'sharepoint.meta': 'SharePoint Meta',
  music: 'Music: Practice &amp; Theory',
  'music.meta': 'Music: Practice &amp; Theory Meta',
  sqa: 'Software Quality Assurance &amp; Testing',
  'sqa.meta': 'Software Quality Assurance &amp; Testing Meta',
  judaism: 'Mi Yodeya',
  'judaism.meta': 'Mi Yodeya Meta',
  german: 'German Language',
  'german.meta': 'German Language Meta',
  japanese: 'Japanese Language',
  'japanese.meta': 'Japanese Language Meta',
  philosophy: 'Philosophy',
  'philosophy.meta': 'Philosophy Meta',
  gardening: 'Gardening &amp; Landscaping',
  'gardening.meta': 'Gardening &amp; Landscaping Meta',
  travel: 'Travel',
  'travel.meta': 'Travel Meta',
  crypto: 'Cryptography',
  'crypto.meta': 'Cryptography Meta',
  dsp: 'Signal Processing',
  'dsp.meta': 'Signal Processing Meta',
  french: 'French Language',
  'french.meta': 'French Language Meta',
  christianity: 'Christianity',
  'christianity.meta': 'Christianity Meta',
  bitcoin: 'Bitcoin',
  'bitcoin.meta': 'Bitcoin Meta',
  linguistics: 'Linguistics',
  'linguistics.meta': 'Linguistics Meta',
  hermeneutics: 'Biblical Hermeneutics',
  'hermeneutics.meta': 'Biblical Hermeneutics Meta',
  history: 'History',
  'history.meta': 'History Meta',
  bricks: 'Bricks',
  'bricks.meta': 'Bricks Meta',
  spanish: 'Spanish Language',
  'spanish.meta': 'Spanish Language Meta',
  scicomp: 'Computational Science',
  'scicomp.meta': 'Computational Science Meta',
  movies: 'Movies &amp; TV',
  'movies.meta': 'Movies &amp; TV Meta',
  chinese: 'Chinese Language',
  'chinese.meta': 'Chinese Language Meta',
  biology: 'Biology',
  'biology.meta': 'Biology Meta',
  poker: 'Poker',
  'poker.meta': 'Poker Meta',
  mathematica: 'Mathematica',
  'mathematica.meta': 'Mathematica Meta',
  psychology: 'Psychology &amp; Neuroscience',
  'psychology.meta': 'Psychology &amp; Neuroscience Meta',
  outdoors: 'The Great Outdoors',
  'outdoors.meta': 'The Great Outdoors Meta',
  martialarts: 'Martial Arts',
  'martialarts.meta': 'Martial Arts Meta',
  sports: 'Sports',
  'sports.meta': 'Sports Meta',
  academia: 'Academia',
  'academia.meta': 'Academia Meta',
  cs: 'Computer Science',
  'cs.meta': 'Computer Science Meta',
  workplace: 'The Workplace',
  'workplace.meta': 'The Workplace Meta',
  chemistry: 'Chemistry',
  'chemistry.meta': 'Chemistry Meta',
  chess: 'Chess',
  'chess.meta': 'Chess Meta',
  raspberrypi: 'Raspberry Pi',
  'raspberrypi.meta': 'Raspberry Pi Meta',
  russian: 'Russian Language',
  'russian.meta': 'Russian Language Meta',
  islam: 'Islam',
  'islam.meta': 'Islam Meta',
  salesforce: 'Salesforce',
  'salesforce.meta': 'Salesforce Meta',
  patents: 'Ask Patents',
  'patents.meta': 'Ask Patents Meta',
  genealogy: 'Genealogy &amp; Family History',
  'genealogy.meta': 'Genealogy &amp; Family History Meta',
  robotics: 'Robotics',
  'robotics.meta': 'Robotics Meta',
  expressionengine: 'ExpressionEngine&#174; Answers',
  'expressionengine.meta': 'ExpressionEngine&#174; Answers Meta',
  politics: 'Politics',
  'politics.meta': 'Politics Meta',
  anime: 'Anime &amp; Manga',
  'anime.meta': 'Anime &amp; Manga Meta',
  magento: 'Magento',
  'magento.meta': 'Magento Meta',
  ell: 'English Language Learners',
  'ell.meta': 'English Language Learners Meta',
  sustainability: 'Sustainable Living',
  'sustainability.meta': 'Sustainable Living Meta',
  tridion: 'Tridion',
  'tridion.meta': 'Tridion Meta',
  reverseengineering: 'Reverse Engineering',
  'reverseengineering.meta': 'Reverse Engineering Meta',
  networkengineering: 'Network Engineering',
  'networkengineering.meta': 'Network Engineering Meta',
  opendata: 'Open Data',
  'opendata.meta': 'Open Data Meta',
  freelancing: 'Freelancing',
  'freelancing.meta': 'Freelancing Meta',
  blender: 'Blender',
  'blender.meta': 'Blender Meta',
  'mathoverflow.net': 'MathOverflow',
  'meta.mathoverflow.net': 'MathOverflow Meta',
  space: 'Space Exploration',
  'space.meta': 'Space Exploration Meta',
  sound: 'Sound Design',
  'sound.meta': 'Sound Design Meta',
  astronomy: 'Astronomy',
  'astronomy.meta': 'Astronomy Meta',
  tor: 'Tor',
  'tor.meta': 'Tor Meta',
  pets: 'Pets',
  'pets.meta': 'Pets Meta',
  ham: 'Amateur Radio',
  'ham.meta': 'Amateur Radio Meta',
  italian: 'Italian Language',
  'italian.meta': 'Italian Language Meta',
  'pt.stackoverflow': 'Stack Overflow em Portugu&#234;s',
  'pt.meta.stackoverflow': 'Stack Overflow em Portugu&#234;s Meta',
  aviation: 'Aviation',
  'aviation.meta': 'Aviation Meta',
  ebooks: 'Ebooks',
  'ebooks.meta': 'Ebooks Meta',
  alcohol: 'Beer, Wine &amp; Spirits',
  'alcohol.meta': 'Beer, Wine &amp; Spirits Meta',
  softwarerecs: 'Software Recommendations',
  'softwarerecs.meta': 'Software Recommendations Meta',
  arduino: 'Arduino',
  'arduino.meta': 'Arduino Meta',
  cs50: 'CS50',
  'cs50.meta': 'CS50 Meta',
  expatriates: 'Expatriates',
  'expatriates.meta': 'Expatriates Meta',
  matheducators: 'Mathematics Educators',
  'matheducators.meta': 'Mathematics Educators Meta',
  'meta.stackoverflow': 'Meta Stack Overflow',
  earthscience: 'Earth Science',
  'earthscience.meta': 'Earth Science Meta',
  joomla: 'Joomla',
  'joomla.meta': 'Joomla Meta',
  datascience: 'Data Science',
  'datascience.meta': 'Data Science Meta',
  puzzling: 'Puzzling',
  'puzzling.meta': 'Puzzling Meta',
  craftcms: 'Craft CMS',
  'craftcms.meta': 'Craft CMS Meta',
  buddhism: 'Buddhism',
  'buddhism.meta': 'Buddhism Meta',
  hinduism: 'Hinduism',
  'hinduism.meta': 'Hinduism Meta',
  communitybuilding: 'Community Building',
  'communitybuilding.meta': 'Community Building Meta',
  worldbuilding: 'Worldbuilding',
  'worldbuilding.meta': 'Worldbuilding Meta',
  'ja.stackoverflow': 'スタック・オーバーフロー',
  'ja.meta.stackoverflow': 'スタック・オーバーフローMeta',
  emacs: 'Emacs',
  'emacs.meta': 'Emacs Meta',
  hsm: 'History of Science and Mathematics',
  'hsm.meta': 'History of Science and Mathematics Meta',
  economics: 'Economics',
  'economics.meta': 'Economics Meta',
  lifehacks: 'Lifehacks',
  'lifehacks.meta': 'Lifehacks Meta',
  engineering: 'Engineering',
  'engineering.meta': 'Engineering Meta',
  coffee: 'Coffee',
  'coffee.meta': 'Coffee Meta',
  vi: 'Vi and Vim',
  'vi.meta': 'Vi and Vim Meta',
  musicfans: 'Music Fans',
  'musicfans.meta': 'Music Fans Meta',
  woodworking: 'Woodworking',
  'woodworking.meta': 'Woodworking Meta',
  civicrm: 'CiviCRM',
  'civicrm.meta': 'CiviCRM Meta',
  medicalsciences: 'Medical Sciences',
  'medicalsciences.meta': 'Medical Sciences Meta',
  'ru.stackoverflow': 'Stack Overflow на русском',
  'ru.meta.stackoverflow': 'Stack Overflow на русском Meta',
  rus: 'Русский язык',
  'rus.meta': 'Русский язык Meta',
  mythology: 'Mythology &amp; Folklore',
  'mythology.meta': 'Mythology &amp; Folklore Meta',
  law: 'Law',
  'law.meta': 'Law Meta',
  opensource: 'Open Source',
  'opensource.meta': 'Open Source Meta',
  elementaryos: 'elementary OS',
  'elementaryos.meta': 'elementary OS Meta',
  portuguese: 'Portuguese Language',
  'portuguese.meta': 'Portuguese Language Meta',
  computergraphics: 'Computer Graphics',
  'computergraphics.meta': 'Computer Graphics Meta',
  hardwarerecs: 'Hardware Recommendations',
  'hardwarerecs.meta': 'Hardware Recommendations Meta',
  'es.stackoverflow': 'Stack Overflow en espa&#241;ol',
  'es.meta.stackoverflow': 'Stack Overflow Meta en espa&#241;ol',
  '3dprinting': '3D Printing',
  '3dprinting.meta': '3D Printing Meta',
  ethereum: 'Ethereum',
  'ethereum.meta': 'Ethereum Meta',
  latin: 'Latin Language',
  'latin.meta': 'Latin Language Meta',
  languagelearning: 'Language Learning',
  'languagelearning.meta': 'Language Learning Meta',
  retrocomputing: 'Retrocomputing',
  'retrocomputing.meta': 'Retrocomputing Meta',
  crafts: 'Arts &amp; Crafts',
  'crafts.meta': 'Arts &amp; Crafts Meta',
  korean: 'Korean Language',
  'korean.meta': 'Korean Language Meta',
  monero: 'Monero',
  'monero.meta': 'Monero Meta',
  ai: 'Artificial Intelligence',
  'ai.meta': 'Artificial Intelligence Meta',
  esperanto: 'Esperanto Language',
  'esperanto.meta': 'Esperanto Language Meta',
  sitecore: 'Sitecore',
  'sitecore.meta': 'Sitecore Meta',
  iot: 'Internet of Things',
  'iot.meta': 'Internet of Things Meta',
  literature: 'Literature',
  'literature.meta': 'Literature Meta',
  vegetarianism: 'Veganism &amp; Vegetarianism',
  'vegetarianism.meta': 'Veganism &amp; Vegetarianism Meta',
  ukrainian: 'Ukrainian Language',
  'ukrainian.meta': 'Ukrainian Language Meta',
  devops: 'DevOps',
  'devops.meta': 'DevOps Meta',
  bioinformatics: 'Bioinformatics',
  'bioinformatics.meta': 'Bioinformatics Meta',
  cseducators: 'Computer Science Educators',
  'cseducators.meta': 'Computer Science Educators Meta',
  interpersonal: 'Interpersonal Skills',
  'interpersonal.meta': 'Interpersonal Skills Meta',
  iota: 'Iota',
  'iota.meta': 'Iota Meta',
  stellar: 'Stellar',
  'stellar.meta': 'Stellar Meta',
  conlang: 'Constructed Languages',
  'conlang.meta': 'Constructed Languages Meta',
  quantumcomputing: 'Quantum Computing',
  'quantumcomputing.meta': 'Quantum Computing Meta',
  eosio: 'EOS.IO',
  'eosio.meta': 'EOS.IO Meta',
  tezos: 'Tezos',
  'tezos.meta': 'Tezos Meta',
  or: 'Operations Research',
  'or.meta': 'Operations Research Meta',
  drones: 'Drones and Model Aircraft',
  'drones.meta': 'Drones and Model Aircraft Meta',
  mattermodeling: 'Matter Modeling',
  'mattermodeling.meta': 'Matter Modeling Meta',
  cardano: 'Cardano',
  'cardano.meta': 'Cardano Meta',
  proofassistants: 'Proof Assistants',
  'proofassistants.meta': 'Proof Assistants Meta',
  substrate: 'Substrate and Polkadot',
  'substrate.meta': 'Substrate and Polkadot Meta',
  bioacoustics: 'Bioacoustics',
  'bioacoustics.meta': 'Bioacoustics Meta',
  solana: 'Solana',
  'solana.meta': 'Solana Meta',
  langdev: 'Programming Language Design and Implementation',
  'langdev.meta':
    'Programming Language Design and Implementation Meta',
  genai: 'GenAI',
  'genai.meta': 'GenAI Meta',
}

export const siteName = (seSite) => {
  return nameMap[seSite.toLowerCase()]
}
