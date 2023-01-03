import React from 'react';
import BgPost from '../../assets/images/blog/post/bg-post.webp';
import Comment1 from '../../assets/images/blog/post/comment-1.webp';
import Comment2 from '../../assets/images/blog/post/comment-2.webp';
import Art1 from '../../assets/images/blog/post/art-1.webp';
import Art2 from '../../assets/images/blog/post/art-2.webp';
import Art3 from '../../assets/images/blog/post/art-3.webp';

import '../../assets/scss/index.scss'

import { Link } from 'react-router-dom';

const Post = () => {
  return (
    <main className="col-lg-10 col-md-12 col-sm-12 main-container">
  <div className="referencia">
    <nav aria-label="breadcrumb">
      <ol className="descolgado breadcrumb">
        <li className="breadcrumb-item"><Link to='/'>Inicio</Link></li>
        <li className="breadcrumb-item active" aria-current="page"><Link to='/Blog'>Blog</Link></li>
        <li className="breadcrumb-item active" aria-current="page">Post</li>
      </ol>
    </nav>
  </div>
  <div className="blog-contenido">
    <div className="row blog-row">
      <div className="col-12">
        <div className="blog-img-bg">
          <img src={BgPost} alt="bg-post" className="blog-img-bg-disable img-fluid" />
        </div>
      </div>
    </div>
    <div className="row blog-row">
      <div className="col-lg-8 blog-post-col">
        <div className="blog-post-full">
          <div className="mb-4">
            <h1 className="pt-2 blog-color-primary blog-post-title">William Harley y Arthur Davidson</h1>
            <p className="blog-mb-40">June 16, 2020 posted by Erick Giraldo</p>
            <p>
              fundaron la empresa en 1903 en Milwaukee (Estados Unidos). En el primer año de vida de la compañía
              lograron fabricar 3 motos pero su innovadora tecnología y su diseño característico hicieron que en
              2014 más de 16.000 Harleys rodaran por el asfalto norteamericano. </p>
            <p>
              La marca creció en ventas y popularidad mundial debido a que proveyó al ejército estadounidense en
              las dos Guerras Mundiales. En los 50 y los 60 comenzaron a mitificarse, asociadas a la imagen de las
              estrellas de Hollywood. El estereotipo de chico malo que proyectaban los moteros les terminó
              perjudicando, aunque unos años más tarde lograron recuperar el status elevado de mediados de siglo.
            </p>
            <span className="d-block text-right blog-color-primary">Creative . Design . Business</span>
          </div>
          {/* Comments */}
          <div className="blog-comments">
            <h2 className="blog-color-primary blog-post-title">Comments</h2>
            <hr className="blog-hr-primary blog-mb-45" />
            <div className=" row">
              <div className="col-lg-4 col-md-12 col-sm-12 blog-comment-image">
                <img src={Comment1} alt="comment-1" className="mb-2 rounded-circle img-thumbnail" />
                <div className="blog-color-primary text-center">Eduardo Ortiz R.</div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <p>
                  Un paraiso, no solo encuentras algunas motos icónicas de la marca sino y sobre todo artículos de
                  colección ropa e implementos todos con el sello de HD un lugar, para mi gusto, espectacular
                  completo y adicionalmente gente muy amable y atentemos atendiendo, 100% recomendable...
                </p>
                <div className="d-flex justify-content-between">
                  <a href="/Post" className="blog-color-primary">COMPARTIR</a>
                  <span className="blog-color-primary">June 14, 2020</span>
                </div>
              </div>
            </div>
            <div className="row">
              <hr />
              <div className="col-lg-4 col-md-12 col-sm-12 blog-comment-image">
                <div className="blog-comment-figure">
                  <img src={Comment2} alt="comment-2" className="mb-2 rounded-circle img-thumbnail" />
                  <div className="blog-color-primary text-center">Dolly Terry</div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12">
                <p>
                  Para todos los amantes de las motos ,como yo , les recomiendo esta tienda , cuenta con varios
                  items , entre ellos camisetas , gorras , botines , todos los acessórios de la propia marca Elite
                  Harley - Davidson y claro esta todas esas bellezas que te aceleran el corazón a mil , que te
                  elevan la presión arterial de tan solo imaginarte , viajando por las carreteras del Perú
                  acompañado de tu fiel amiga, tu compañera de aventuras .❤❤❤❤❤
                </p>
                <div className="d-flex justify-content-between">
                  <a href="/Post" className="blog-color-primary">COMPARTIR</a>
                  <span className="d-block text-right blog-color-primary">June 21, 2020</span>
                </div>
              </div>
            </div>
            <form action className="mb-5 blog-comment-form">
              <h2 className="blog-color-primary blog-post-title mb-4">Comentarios</h2>
              <div className="mb-4">
                <label htmlFor="nombre">Nombres</label>
                <input type="text" className="form-control" id="nombre" />
              </div>
              <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control" id="email" />
              </div>
              <div className="mb-4">
                <label htmlFor="contacto">Comentario</label>
                <textarea className="form-control" id="contacto" rows={6} defaultValue={""} />
              </div>
              <div className="post-btn text-right ">
                <button type="button" className="btn btn-outline-primary">Enviar</button>
                <button type="button" className="btn btn-outline-secondary">Cancelar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <aside className="col-lg-4 blog-aside-col">
        <div className="blog-post-sidebar">
          <hr className="mb-3 blog-hr-primary" />
          <h2 className="mb-4 blog-post-title blog-color-primary">Categorias</h2>
          <ul className="blog-mb-75 pl-5 blog-category-list">
            <li><a href="/Post" className="blog-color-primary">Experiencias</a></li>
            <li><a href="/Post" className="blog-color-primary">Eventos de viaje</a></li>
            <li><a href="/Post" className="blog-color-primary">Música y Motos</a></li>
            <li><a href="/Post" className="blog-color-primary">Video y Audio</a></li>
            <li><a href="/Post" className="blog-color-primary">Reportajes</a></li>
            <li><a href="/Post" className="blog-color-primary">Comunidad</a></li>
          </ul>
          <hr className="mb-3 blog-hr-primary" />
          <h2 className="blog-mb-40 blog-post-title blog-color-primary">Artículos Relacionados</h2>
          <a href="/Post" className="d-block blog-mb-40">
            <img src={Art1} alt="art-1" className="mb-3 img-fluid" />
            <p className="blog-color-primary">El Mantenimiento De La Correa De Transmisión.</p>
          </a>
          <a href="/Post" className="d-block blog-mb-40">
            <div>
              <img src={Art2}  alt="art-2" className="mb-3 img-fluid" />
              <p className="blog-color-primary">Soñar A Lo Grande.</p>
            </div>
          </a>
          <a href="/Post" className="d-block blog-mb-40">
            <div>
              <img src={Art3}  alt="art-3" className="mb-3 img-fluid" />
              <p className="blog-color-primary">Celebración De La Softail.</p>
            </div>
          </a>
        </div>
      </aside>
    </div>
  </div>
</main>

  )
}

export default Post