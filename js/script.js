/* eslint-disable no-plusplus */
const speakerData = [
  {
    speaker_photo: 'images/speaker6.jpg',
    speaker_name: 'Yochai Benkler',
    speaker_job: 'Berkman Profesor of Entrepreneurial Legal Studies at Harvard Law School',
    speaker_information: 'Benkler studies commonsbased peer production, and published his seminal book The Wealth of Networks in 2006.',
  },
  {
    speaker_photo: 'images/speaker5.jpg',
    speaker_name: 'Kilnam Chon',
    speaker_job: 'Director of Art Centre Nabi and a board member of CC Korea',
    speaker_information: 'Kilnam Chon helped bring the Internet to Asia and is an outspoken advocate for the open web and digital commons. In 2012, he was inducted into the inaugural class of the Internet Societys (ISOC) Internet Hall of Fame.',
  },
  {
    speaker_photo: 'images/speaker4.jpg',
    speaker_name: 'SohYeong Noh',
    speaker_job: 'Director of Art Centre Nabi and a board member of CC Korea',
    speaker_information: 'As the main venue for new media art production in Korea, Nabi promotes crossdiscplinary collaboration and understanding among science technology, humanites, and the arts.',
  },
  {
    speaker_photo: 'images/speaker3.jpg',
    speaker_name: 'Julia Leda',
    speaker_job: 'President of Young Pirates of Europe',
    speaker_information: 'European ingetration, political democracy and participation of youth through online as her major conder, Redas report outlining potential changes to EU copynight law was approved by the Parlament in July.',
  },
  {
    speaker_photo: 'images/speaker2.jpg',
    speaker_name: 'Lila Tretikov',
    speaker_job: 'Executive Director of the Wikimedia Foundation',
    speaker_information: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation, the nonprofit organization that operates Wikipedia. Wikipedia is freely available in 290 languages and used by nearly half a billion people around the world every month.',
  },
  {
    speaker_photo: 'images/speaker1.jpg',
    speaker_name: 'Ryan Merkley',
    speaker_job: 'CEO of Creative Commons, ex C00 of the Mozilla Foundation',
    speaker_information: 'Ryan had been leading opensource projects at the Mozilla Foundation such as the open source movement.',
  },
];

for (let i = 0; i < speakerData.length; i++) {
  const speakersInfo = `
  <li class="speaker-info">
    <ul>
      <li><img src="${speakerData[i].speaker_photo}" alt="speaker photo" /></li>
      <li>
        <div class="speaker-name">${speakerData[i].speaker_name}</div>
        <div class="speaker-job">${speakerData[i].speaker_job}</div>
        <div class="speaker-data">
          <p>${speakerData[i].speaker_information}</p>
        </div>
      </li>
    </ul>
  </li>`;

  document.getElementById('speaker').innerHTML += speakersInfo;
}