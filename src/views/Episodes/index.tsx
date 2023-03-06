import { FC, useCallback, useEffect, useState } from "react";
import Epis from "../../components/epis/index";
import Navbar from "../../components/NavbarHome";
import { getEpisode, Episode } from "../../services/Api/episodes"
import { App, Container, ButtonNext, ButtonPrevious } from "./styles";

const Episodes: FC = () => {
  const [episodeList, setEpisodeList] = useState<Episode[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1)

  const getEpisodeList = useCallback(async () => {
    setIsLoading(true)
    const episode = await getEpisode();
    setEpisodeList(episode);
    setIsLoading(false)
  }, [page])

  useEffect(() => {
    getEpisodeList();
  }, [getEpisodeList]);

  const handleNextPage = () => { setPage(page + 1) }
  const handlePrevPage = () => { setPage(page - 1) }

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <App>
      <Navbar />
      <Container>
        {episodeList.slice((page - 1) * 20, ((page - 1) * 20) + 20).map((episode, index) => (
          <Epis
            key={index}
            episodeId={episode.id}
            name={episode.name}
            air_date={episode.air_date}
            episode={episode.episode}
          />
        ))}
        <ButtonPrevious onClick={handlePrevPage}>Previous</ButtonPrevious>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>

      </Container>
    </App>
  );
};

export default Episodes;
