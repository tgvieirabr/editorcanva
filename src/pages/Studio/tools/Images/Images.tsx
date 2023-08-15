import { VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import NothingFound from "~/components/NothingFound/NothingFound";
import SearchForm from "./SearchForm";
import InfiniteWrapper from "./InfiniteWrapper";
import ImagesGrid from "./ImagesGrid";

export type Photo = {
  id: any;
  urls: { regular: any };
};
// @ts-ignore  const [searchQuery, setSearchQuery] = useState<string>('');


const Images = () => {
  // Correção aqui: declare tanto o valor do estado quanto o setter
  const [searchQuery, setSearchQuery] = useState<string>('');


  const [images, setImages] = useState<Photo[]>([]);
  const fetchImages = async () => {
    try {
      // Fetch images from the new API
      const response = await fetch(
        "https://app.revendapro.com.br/api/reseller/daab8dd92515d859f885cefa6f1fe4fd0aa94d5e"
      );
      const xmlData = await response.text();
      // Parse XML response to extract image URLs inside the <Fotos> tag
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlData, "text/xml");
      const fotosElements = xmlDoc.getElementsByTagName("Fotos");
      const imagesFromAPI = Array.from(fotosElements).map((foto, index) => {
        const links = foto.textContent ? foto.textContent.split(";") : []; // Verifique se foto.textContent existe
        const firstLink = links.length > 0 ? links[0] : "";
        return {
          id: index.toString(),
          urls: { regular: firstLink },
        };
      });

      // Update the images state with the fetched images
      setImages(imagesFromAPI);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchImages(); // Fetch images on component mount
  }, []);

  return (
    <>
      <VStack bgColor="white" w="100%" spacing={3} p="4">
        <SearchForm setSearch={setSearchQuery} setQueryReset={fetchImages} />
      </VStack>
      <VStack
        id="imageGrid"
        spacing={3}
        sx={{ p: 4, position: "relative", h: "100%", overflowY: "auto" }}
      >
        {!images?.length ? (
          <NothingFound message="No images were found." />
        ) : (
          <InfiniteWrapper
            fetchItems={fetchImages}
            count={images?.length || 10}
          >
            <ImagesGrid images={images} />
          </InfiniteWrapper>
        )}
      </VStack>
    </>
  );
};

export default Images;
