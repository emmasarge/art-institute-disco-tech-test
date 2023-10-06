import React, { HTMLAttributes } from "react";
import { ReactComponent as BackArrow } from "../../assets/icons/back_arrow.svg";

interface Art {
  id: number;
  title: string;
  image_id: string;
  artist_title: string;
  artwork_type_title: string;
  department_title: string;
  description: string;
  date_display: string;
  dimensions: string;
  medium_display: string;
  exhibition_history: string;
  classification_titles: string[];
  category_titles: string[];
  copyright_notice: string;
  credit_line: string;
}

interface SingleArtworkDisplayMoleculeProps {
  art: Art;
  onClickBack?: () => void;
}
interface DisplayHTMLProps extends HTMLAttributes<HTMLDivElement> {
  htmlContent: string;
}
export const SingleArtworkDisplayMolecule = ({
  art,
  onClickBack,
}: SingleArtworkDisplayMoleculeProps) => {
  function DisplayHTML({ htmlContent }: DisplayHTMLProps) {
    return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
  }

  return (
    <div className="w-full flex flex-col pt-4 lg:pt-10">
      <div className="flex flex-col lg:flex-row w-full justify-between">
        <div className="flex flex-col w-full lg:w-1/2 lg:h-max lg:min-h-screen lg:sticky lg:top-[4.6rem]">
          <div className="w-full h-full ">
            {art.image_id !== null ? (
            <img
              className="w-full lg:max-h-[80vh] mx-auto"
              src={`https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg`}
              alt={art.title}
            />):(< div className="w-full lg:max-h-[80vh] flex justify-center items-center mx-auto bg-yellow-500 h-[30vh] lg:h-[80vh]">
                <div><p className="text-[1.5em] tracking-wide">Image not available.</p></div>
            </div>)
                      }          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col pt-4 lg:pt-0 justify-start items-start pb-32  ">
          <div className="w-full lg:w-10/12 mt-4 lg:mt-0  mx-auto max-w-[800px] ">
            <h1 className="text-[2.5em] leading-[1em] font-medium">
              {art.title}
            </h1>
            <h2 className="mt-2 lg:mt-1 text-[2.125em] leading-[1.125em] font-light">
              {art.artist_title}
            </h2>
            {art.medium_display && (
              <p className=" mt-4 w-11/12 lg:w-full lg:mt-1.5 text-[1.65em] lg:text-[1.25em] leading-[1.125em] font-light">
                <span>{art.medium_display}</span>
              </p>
            )}
            <p className="mt-1 lg:mt-1.5  text-[1.5em]  lg:text-[1.25em] leading-[1.125em] font-light">
              date. <span className="italic">{art.date_display}</span>
            </p>
            {art.credit_line && (
              <p className="mt-1  text-[1.25em] lg:text-[1.125em] leading-[1.125em] font-light">
                <span className="italic">{art.credit_line}</span>
              </p>
            )}

            <div className="w-full flex flex-col mt-4 lg:mt-10 ">
              {art.description && (
                <div className="mt-10 text-[1.65em] lg:text-[1.25em] leading-[1.125em] ">
                  <DisplayHTML htmlContent={art.description} />
                </div>
              )}
              <div className="text-[1.125em] lg:text-[0.95em]">
                {art.dimensions && (
                  <>
                    <p className="mt-12 text-[1.25em] leading-[1.125em] ">
                      dimensions.
                    </p>
                    <p className="italic text-[1.25em] leading-[1.125em] font-light">
                      {art.dimensions}
                    </p>
                  </>
                )}

                {art.classification_titles && (
                  <>
                    <p className="mt-5 text-[1.25em] leading-[1.125em] ">
                      classification.
                    </p>
                    <p className="italic text-[1.25em] leading-[1.125em] font-light">
                      {art.classification_titles.join(", ")}
                    </p>
                  </>
                )}
                {art.category_titles && (
                  <>
                    <p className="mt-5 text-[1.25em] leading-[1.125em] ">
                      category.
                    </p>
                    <p className="italic text-[1.25em] leading-[1.125em] font-light">
                      {art.category_titles.join(", ")}
                    </p>
                  </>
                )}

                {art.exhibition_history && (
                  <div className="pb-8">
                    <p className="mt-10 text-[1.25em] leading-[1.125em] ">
                      exhibition history.
                    </p>
                    <p className="italic text-[1.25em] leading-[1.125em] font-light">
                      {art.exhibition_history}
                    </p>
                  </div>
                )}
              </div>
              <div className="py-16 lg:mb-20">
                <button
                  className="flex flex-row items-center cursor-pointer transition-all ease-in-out duration-300 hover:duration-300 hover:scale-105"
                  onClick={onClickBack}
                >
                  <div className="w-fit">
                    <BackArrow className=" max-w-[3em] h-[1em] lg:h-[0.75em]" />
                  </div>
                  <div className="ml-2 text-[1.75em] lg:text-[1.35em] tracking-wide  pb-[0.175em] leading-[1em]">
                    <p>go back. </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
