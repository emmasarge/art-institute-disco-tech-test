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

interface ArtCardMoleculeProps {
  art: Art;
  onClickNext: (id: number) => void;
}

export const ArtCardMolecule = ({ art, onClickNext }: ArtCardMoleculeProps) => {
  return (
    <div
      key={art.id}
      className="w-full shadow rounded-[4px] flex flex-row my-6 hover:scale-[102%] hover:my-7 hover:delay-75 transition cursor-pointer ease-in-out duration-300 hover:duration-300"
      onClick={() => onClickNext(art.id)}
    >
      <div
        className="w-[60%] h-36  lg:h-[18em] bg-cover rounded-tl-[4px] rounded-bl-[4px]  bg-center flex  relative justify-start px-3 lg:px-10 items-center"
        style={{
          backgroundImage: `url('https://www.artic.edu/iiif/2/${art.image_id}/full/843,/0/default.jpg')`,
        }}
      >
        <div className="absolute  rounded-tl-[4px]  rounded-bl-[4px] inset-0 bg-black opacity-50"></div>

        <h1 className="text-white z-40 uppercase leading-[1.125em] text-[1.4em] lg:text-[3em] tracking-wide font-bold">
          {art.title}
        </h1>
      </div>
      <div className="flex flex-col justify-between w-[35%]  py-2 pl-[0.5em]">
        <div className="w-[95%] lg:w-10/12 lg:mx-auto ml-[0.35em] lg:pt-2 flex-wrap flex flex-col justify-center">
          <div className="w-full flex flex-col pt-1  ">
            <h2 className="leading-[1em] w-full text-[1.125em] lg:text-[2em] font-medium">
              {art.artist_title === null ? "Unknown" : <> {art.artist_title}</>}
            </h2>

            <p className="leading-[1.12em] mt-[0.175em] lg:mt-[0.3em] lg:text-[1.5em] font-light l">
              d. {art.date_display}
            </p>
          </div>
        </div>
        <div
          onClick={() => onClickNext(art.id)}
          className="ml-[0.35em] lg:w-10/12 lg:mx-auto lg:pb-4"
        >
          <p className="italic cursor-pointer lg:text-[1.35em] tracking-wider transition-all ease-in-out duration-300 hover:underline hover:underline-offset-4 hover:duration-300">
            See more.
          </p>
        </div>
      </div>
    </div>
  );
};
