import FsLightbox from 'fslightbox-react';

export const Lightbox = ({ toggler, url }) => {
  return (
    <>
      <FsLightbox toggler={toggler} sources={[url]} />
    </>
  );
};
