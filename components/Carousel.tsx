'use client';

import Carousel from "nuka-carousel"

export function MyCarousel({images}: { images: {original: string, alt: string, text: string}[]}) {
  return <>
    <Carousel>
      {images.map((image, index) =>
        <figure className="figure">
          <img key={index} src={image.original} className="img-thumbnail" alt={image.alt} />
          <figcaption className="figure-caption text-break">{image.text}</figcaption>
        </figure>
      )}
    </Carousel>
  </>
}

