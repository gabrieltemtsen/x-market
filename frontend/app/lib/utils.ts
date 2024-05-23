//@ts-ignore
import { Web3Storage } from "web3.storage";
// const apiToken = process.env.REACT_APP_WEB3STORAGE_API_TOKEN;f

const token = process.env.NEXT_PUBLIC_WEB3_STORAGE_TOKEN;
const client = new Web3Storage({ token });

export const getJSONFromFileinCID = async (_cid: string) => {
  const res = await client.get(_cid);
  if (!res.ok) {
  }
  const filesArr = await res.files(); // Web3File[]
  const assetCid = filesArr[0].cid;
  const data = await fetch(`https://${assetCid}.ipfs.w3s.link`).then((dets) =>
    dets.json(),
  );
  return data;
};

export const getJSONFromCID = async (_cid: string) => {
  const json = await client.get(_cid);
  const filesArr = await json.files(); // Web3File[]
  const assetCid = filesArr[0].cid;
  console.log("abc", assetCid);
  const data = await fetch(`https://${assetCid}.ipfs.w3s.link`).then((dets) =>
    dets.json(),
  );
  return data;
};

export const putFileandGetHash = async (file: File) => {
  const content = new Blob([file], { type: "application/json" });
  const fileObj = new File([content], "file.json", {
    type: "application/json",
  });
  const res = await client.put([fileObj]);
  return res;
};

export const putJSONandGetHash = async (json: any) => {
  const content = new Blob([JSON.stringify(json)], {
    type: "application/json",
  });
  const fileObj = new File([content], "file.json", {
    type: "application/json",
  });
  const res = await client.put([fileObj], { wrapWithDirectory: false });
  return res;
};

export const pushImgToStorage = async (file: File) => {
  const res = await client.put([file], { wrapWithDirectory: false });
  return res;
};
