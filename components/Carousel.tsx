'use client';

import Carousel from "nuka-carousel" // documentation: https://formidable.com/open-source/nuka-carousel/

export function MyCarousel({images}: { images: {original: string, alt: string, text: string}[]}) {
  return <>
    <Carousel>
      {images.map((image, index) =>
        <figure className="figure" key={index}>
          <img src={image.original} className="img-thumbnail" alt={image.alt} />
          <figcaption className="figure-caption text-break text-white">{image.text}</figcaption>
        </figure>
      )}
    </Carousel>
  </>
}

