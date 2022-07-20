import React from 'react';
import './App.css';
import artists from './store';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Artists() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjYFV-bwRLTx5vbXeIRyRZDH86KNG-4ktGcg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzp194FEWQVocOAt-NbPjTNiAOS5BKOle-DpOCmVrNLtFsMhFVaYaiQLobWfzaDo4llME&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpBRlBEawcZq8IC9xyXveB5hzOHAZ2WcmGZgg__tGM0lDhtghb_qcbbmA0Ddtj-QwY90s&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9N3DLb6607wYCR7YZuEM0PJtFnrHCnHnm03iJseYUOUZCz_0VXK-d632oJSmX72yIYmQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8YK5K9cMV46KvJJM8jQ71m3eGGOmHlehrexn0WEBcbfL_hnEy2m5n69x-Td_aZduJKiQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS23hGuKQ1gkrkS9QGF4QOnE5OpDBco0N0C3oiK5EuW75fz4Nakk450S_8tA4MEbsREpH0&usqp=CAU',
  ];

  return (
    <>
      <div style={{ height: '100vh' }}>
        <h1>MTV Base Headline Artists 2019</h1>
        {artists.map((artist) => (
          <div id='card-body' key={artist.id}>
            <div className='card'>
              <h2>{artist.name}</h2>
              <p>genre: {artist.genre}</p>
              <p>Albums released: {artist.albums}</p>
            </div>
          </div>
        ))}
      </div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum. Why do we use it? It is a long established fact that a
        reader will be distracted by the readable content of a page when looking
        at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using
        'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as
        their default model text, and a search for 'lorem ipsum' will uncover
        many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected
        humour and the like). Where does it come from? Contrary to popular
        belief, Lorem Ipsum is not simply random text. It has roots in a piece
        of classical Latin literature from 45 BC, making it over 2000 years old.
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
        Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
        This book is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
        amet..", comes from a line in section 1.10.32. The standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those
        interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
        Malorum" by Cicero are also reproduced in their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
        Where can I get some? There are many variations of passages of Lorem
        Ipsum available, but the majority have suffered alteration in some form,
        by injected humour, or randomised words which don't look even slightly
        believable. If you are going to use a passage of Lorem Ipsum, you need
        to be sure there isn't anything embarrassing hidden in the middle of
        text. All the Lorem Ipsum generators on the Internet tend to repeat
        predefined chunks as necessary, making this the first true generator on
        the Internet. It uses a dictionary of over 200 Latin words, combined
        with a handful of model sentence structures, to generate Lorem Ipsum
        which looks reasonable. The generated Lorem Ipsum is therefore always
        free from repetition, injected humour, or non-characteristic words etc.
      </p>
      <div className='imageContainer'>
        {images.map((image, index) => (
          <div key={index}>
            <LazyLoadImage
              width='200'
              height='200'
              src={image}
              alt='artist'
              className='image'
            />
          </div>
        ))}
      </div>
    </>
  );
}
