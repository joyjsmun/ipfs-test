import { MediaRenderer, useStorageUpload } from "@thirdweb-dev/react";
import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
//after upload file, display on the web
const [uris,setUris] = useState<string[]>([]);
console.log(uris);


  const {mutateAsync:upload} = useStorageUpload();
  const onDrop  = useCallback(
    async (acceptedFiles: File[]) => {
      const _uris =await upload({data:acceptedFiles});
      setUris(_uris);
    },[upload],
  );

  const {getRootProps,getInputProps} = useDropzone({onDrop});
  return (
    <div>
    <div {...getRootProps()}>
      <input {...getInputProps()}/>
      <button>Drop Files here to upload them to IPFS</button>

      
    </div>
    <div>
    {uris.map(uri => {
      return(
        <MediaRenderer key={uri} src={uri} alt="image" />
      )
    })}
    </div>
    </div>
  );
};

export default Home;
