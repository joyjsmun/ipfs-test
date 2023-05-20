import { ConnectWallet, useStorageUpload } from "@thirdweb-dev/react";
import { useDropzone } from "react-dropzone";
import { useCallback } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {

  const {mutateAsync:upload} = useStorageUpload();
  const onDrop  = useCallback(
    async (acceptedFiles: File[]) => {
      const uris =await upload({data:acceptedFiles});
      console.log(uris);
    },[upload],
  );

  const {getRootProps,getInputProps} = useDropzone({onDrop});
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()}/>
      <button>Drop Files here to upload them to IPFS</button>
      
    </div>
  );
};

export default Home;
