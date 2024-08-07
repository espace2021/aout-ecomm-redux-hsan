import React, { memo, useMemo } from 'react';
import { useSelector } from "react-redux";
//npm i --save react-lazy-load-image-component
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const useArticles = () => {
  return useSelector(
      (state) => ({
        articles: state.storearticles.articles,
        isLoading: state.storearticles.isLoading,
        error: state.storearticles.error,
      }),
      (prev, next) =>
        prev.articles === next.articles &&
        prev.isLoading === next.isLoading &&
        prev.error === next.error
  );
};

const Affichearticle = () => {
  console.time("render");
    
    const { articles, isLoading, error } = useArticles();

    // Utilisation de useMemo pour mémoriser le tableau
    const renderedTable = useMemo(() => {
      console.time("table-render");
      const result = (
        <table>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Référence</th>
                    <th>Désignation</th>
                    <th>Marque</th>
                    <th>Quantité</th>
                    <th>Prix</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                </tr>
            </thead>
            <tbody>
                {articles.map((art, index) => (
                    <tr key={index}>
                        <td>
                           <LazyLoadImage
                                alt={art.designation}
                                height={80}
                                src={art.imageart} 
                                width={80} 
                                effect="blur"
                                wrapperProps={{
                                    // If you need to, you can tweak the effect transition using the wrapper style.
                                    style: {transitionDelay: "1s"},
                                }}
                                />
                       </td>
                        <td>{art.reference}</td>
                        <td>{art.designation}</td>
                        <td>{art.marque}</td>
                        <td>{art.qtestock}</td>
                        <td>{art.prix}</td>
                        <td><button className='edit'>
                            <i className="fa-solid fa-pen-to-square"></i>Update
                        </button></td>
                        <td><button className="delete">
                            <i className="fa-solid fa-trash"></i>Delete
                        </button></td>
                    </tr>
                ))}
            </tbody>
            <tfoot>
            </tfoot>
        </table>
       );
       console.timeEnd("table-render");
       return result;
   }, [articles]);

   console.timeEnd("render");

    return (
        <div className="table-container">
            {isLoading ? (
                <div className="loading-message">Chargement en cours...</div>
            ) : error ? (
                <div className="error-message">Erreur : {error}</div>
            ) : (
                renderedTable
            )}
        </div>
    );
};

export default memo(Affichearticle);
