const OldData = [
  {
    id: 3,
    roles: ['admin', 'mentor'],
    name: 'José Amorim',
    company: 'University of Coimbra',
    job: 'Invited Teaching Assistant',
    social: [
      { linkedin: 'https://linkedin.com/in/josepamorim' },
      { github: 'https://github.com/jpamorim' }
    ],
    avatar: 'jose.jpg'
  },
  {
    id: 5,
    roles: ['admin', 'mentor'],
    name: 'Daniela Pereira',
    company: 'Aubay Portugal',
    job: 'Information Systems Consultant',
    social: [{ linkedin: 'https://www.linkedin.com/in/danielasmpereira' }],
    avatar: 'daniela-pereira.jpg'
  },
  {
    id: 8,
    roles: ['admin', 'mentor'],
    name: 'Joana Lopes',
    company: 'SIBS',
    job: 'Software Engineer',
    social: [],
    avatar: 'joana_lopes.jpg'
  },
  {
    id: 9,
    roles: ['admin', 'mentor'],
    name: 'Mónica Fidalgo',
    company: 'Mercedes-Benz.io',
    job: 'Frontend Developer',
    social: [{ linkedin: 'https://www.linkedin.com/in/monicafidalgo/' }],
    avatar: 'monica.jpg'
  },
  {
    id: 10,
    roles: ['admin', 'mentor'],
    name: 'Pedro Fonseca',
    company: 'KWAN',
    job: 'Frontend Developer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/pedromlfonseca/' },
      { github: 'https://github.com/PMLF' }
    ],
    avatar: 'pedro-fonseca.jpeg'
  },
  {
    id: 11,
    roles: ['admin', 'mentor'],
    name: 'Sara Vieira',
    company: 'ISCTE - Eng. Informática',
    job: 'Estudante',
    social: [{ linkedin: 'https://www.linkedin.com/in/sarapvieira/' }],
    avatar: 'sara.jpg'
  },
  {
    id: 12,
    roles: ['mentor', 'collaborator'],
    name: 'Adolfo Ferreira',
    company: 'Spider AF',
    job: 'Designer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/iamadolfo/' }
    ],
    avatar: 'adolfo.png'
  },
  {
    id: 14,
    roles: ['mentor', 'collaborator'],
    name: 'Pedro Torres',
    company: 'Salsify',
    job: 'Senior Director of Engineering',
    social: [{ linkedin: 'https://www.linkedin.com/in/pedrogustavotorres/' }],
    avatar: 'pedro-torres.png'
  },
  {
    id: 15,
    roles: ['mentor', 'collaborator'],
    name: 'Rita Pereira',
    company: 'Tibber',
    job: 'Product Manager',
    social: [
      { linkedin: 'https://www.linkedin.com/in/ritasousapereira/' },
      { github: 'https://github.com/ritapereira10' }
    ],
    avatar: 'rita.jpg'
  },
  {
    id: 16,
    roles: ['mentor', 'collaborator'],
    name: 'Sérgio Silva',
    company: 'Microsoft',
    job: 'Principal Software Engineering Manager',
    social: [{ linkedin: 'https://www.linkedin.com/in/sergio-a-silva/' }],
    avatar: 'sergio.png'
  },
  {
    id: 18,
    roles: ['mentor', 'collaborator'],
    name: 'Rita Peixoto',
    company: 'UM - Eng. Informática',
    job: 'Software Engineer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/anaritapeixoto/' },
      { github: 'https://github.com/rita-peixoto' }
    ],
    avatar: 'ritapeixoto.png'
  },
  {
    id: 19,
    roles: ['mentor', 'collaborator'],
    name: 'Marta Dias',
    company: 'KWAN',
    job: 'Product Owner',
    social: [
      { linkedin: 'https://www.linkedin.com/in/marta-r-dias/' },
      { github: 'https://github.com/markeldias' }
    ],
    avatar: 'marta.png'
  },
  {
    id: 21,
    roles: ['mentor', 'collaborator'],
    name: 'Jéssica Lemos',
    company: 'Talkdesk',
    job: 'Software Engineer',
    social: [
      { linkedin: 'https://www.linkedin.com/in/jessicalemos9/' },
      { github: 'https://github.com/jessicalemos ' }
    ],
    avatar: 'jessica-lemos.png'
  }
];

export default OldData;
