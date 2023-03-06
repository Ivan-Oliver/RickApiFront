import { FC, useCallback, useEffect, useState } from "react";
import Locat from "../../components/locat/index";
import Navbar from "../../components/NavbarHome";
import { getLocation, Location } from "../../services/Api/locations"
import { App, Container, ButtonNext, ButtonPrevious } from "./styles";

const Locations: FC = () => {
  const [locationList, setLocationList] = useState<Location[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState(1)

  const getLocationList = useCallback(async () => {
    setIsLoading(true)
    const location = await getLocation();
    setLocationList(location);
    setIsLoading(false)
  }, [page])

  useEffect(() => {
    getLocationList();
  }, [getLocationList]);

  const handleNextPage = () => { setPage(page + 1) }
  const handlePrevPage = () => { setPage(page - 1) }

  if (isLoading) {
    return <p>Loading</p>
  }

  return (
    <App>
      <Navbar />
      <Container>
        {locationList.slice((page - 1) * 20, ((page - 1) * 20) + 20).map((location, index) => (
          <Locat
            key={index}
            locationId={location.id}
            name={location.name}
            types={location.type}
            dimension={location.dimension}
          />
        ))}
        <ButtonPrevious onClick={handlePrevPage}>Previous</ButtonPrevious>
        <ButtonNext onClick={handleNextPage}>Next</ButtonNext>


      </Container>
    </App>
  );
};

export default Locations;
