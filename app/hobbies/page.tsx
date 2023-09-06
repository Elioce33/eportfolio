import {Article} from "@components/Article/Article";
import {MyCarousel} from "@components/Carousel";

const IMAGES = {
  photos: [
    {
      original: '/images/hobbies/photos/arc_triomphe.jpg',
      alt: 'Arc de triomphe',
      text: 'Arc de triomphe'
    },
    {
      original: '/images/hobbies/photos/epie_ble.jpg',
      alt: 'Épi de blé',
      text: 'Épi de blé'
    },
    {
      original: '/images/hobbies/photos/eau_nuit_lumiere.jpg',
      alt: 'Reflet de lumière dans l\'eau',
      text: 'Reflet de lumière dans l\'eau'
    },
    {
      original: '/images/hobbies/photos/hirondelle.jpg',
      alt: 'Des hirondelles sur un fil électrique',
      text: 'Des hirondelles sur un fil électrique'
    }
  ],
  books: [
    {
      original: '/images/hobbies/books/percy_jackson.jpg',
      alt: 'Percy Jackson the lightning thief - Rick Riordan',
      text: 'Percy Jackson the lightning thief - Rick Riordan'
    },
    {
      original: '/images/hobbies/books/time_rider.jpg',
      alt: 'Time Rider - Alex Scarrow',
      text: 'Time Rider - Alex Scarrow'
    },
    {
      original: '/images/hobbies/books/instant_present.jpg',
      alt: 'L\'instant présent - Guillaume Musso',
      text: 'L\'instant présent - Guillaume Musso'
    },
    {
      original: '/images/hobbies/books/looking_for_alaska.jpg',
      alt: 'Looking for Alaska - John Green',
      text: 'Looking for Alaska - John Green'
    }
  ]
}


export default function Page() {
  return <>
    <main>
      <div className={"row row-cols-2"}>
        <div className={"col"}>
          <Article>
            <h2>Photographie</h2>
            <div className={"row row-cols-2"}>
              <div className={"col"}>
                <p>
                  Apprécie prendre en photo ce qui m'entoure et particulièrement la nature. À chaque sortie j'en profite pour
                  prendre en photo ce que je trouve de beau. <br/>
                  La majorité de mes photos sont prise avec mon téléphone, car j'aime avoir un appareil photo à porté de main
                  pour ne pas rater une occasion de prendre une photo.
                </p>
                <p>
                  Je partage mes meilleurs cliché sur mon compte instagram: <a href="https://www.instagram.com/eliott.collin">@eliott.collin</a>
                </p>
              </div>
              <div className={"col"}>
                <MyCarousel images={IMAGES.photos} />
              </div>
            </div>
          </Article>
        </div>
        <div className={"col"}>
          <Article>
            <h2>Lecture</h2>
            <div className={"row"}>
              <div className={"col-8"}>
                <p>La lecture est un moyen de s'évader dans un autre monde le temps d'un instant. Entre les livres de Guillaume
                  Musso et la série Percy Jackson de l'écrivain Rick Riordan je me suis perdu de nombreuse fois</p>
              </div>
              <div className={"col"}>
                <MyCarousel images={IMAGES.books} />
              </div>
            </div>
          </Article>
        </div>
        <div className={"col"}>
          <Article>
            <h2>Nature et Vélo</h2>
            <p>J'aime la nature</p>
          </Article>
        </div>
      </div>
    </main>
  </>
}