/* eslint-disable react/no-unescaped-entities */
import { Box, Flex, Image, LinkBox, Text } from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { FaTrash } from "react-icons/fa";
function ImageDropArea({
  onUploadChange = (hasImage: boolean, files: File[]) => {},
}) {
  const [files, setFiles] = useState<File[]>([]);
  function genID() {
    return Math.random().toString(16).substring(2);
  }

  const [images, setImages] = useState<
    Array<{ id: string; index: number; src: string | ArrayBuffer | null }>
  >([]);
  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles((prev) => [...prev, ...acceptedFiles]);
    acceptedFiles.map((file, index) => {
      const reader = new FileReader();
      reader.onload = function (e) {
        setImages((prevState) => [
          ...prevState,
          { id: genID(), index, src: e.target && e.target.result },
        ]);
      };
      reader.readAsDataURL(file);
      return file;
    });
  }, []);

  useEffect(() => {
    onUploadChange(images.length > 0, files);
  }, [images, onUploadChange, files]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: { "image/*": [".jpeg", ".png", ".jpg", ".svg", ".gif"] },
    onDrop,
    maxFiles: 1,
  });
  function removeImage(image: {
    id: string;
    index: number;
    src: string | ArrayBuffer | null;
  }) {
    let _images = [...images];
    let _files = [...files];
    _files = _files.filter((f, i) => i !== image.index);
    _images = _images.filter((img) => img.id !== image.id);
    setImages(_images);
    setFiles(_files);
  }

  return (
    <section className="container">
      {/* @ts-ignore */}
      <Box
        {...getRootProps({
          className: "dropzone",
          h: "10rem",
          textAlign: "center",
          maxW: "600px",
          borderColor: "gray.500",
          border: "2px",
          borderStyle: "dashed",
          borderRadius: "0.5rem ",
          p: "1rem",
          cursor: "pointer",
        })}
      >
        <input {...getInputProps()} />
        <Text
          _hover={{ bg: "#d1cfcf44" }}
          {...{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          borderRadius={"inherit"}
          h={"100%"}
          w={"100%"}
        >
          <Text as={"span"} casing={"uppercase"}>
            JPG,PNG,GIF,SVG
          </Text>
        </Text>
      </Box>
      <Box mb={8}>
        <Flex gap={"0.75rem"} pt={"1rem"}>
          {images.map((image) => (
            <Box
              pos={"relative"}
              h={"12rem"}
              w={"14rem"}
              key={crypto.randomUUID()}
            >
              <Box
                onClick={() => removeImage(image)}
                pos={"absolute"}
                top={"0"}
                right={"0"}
                as="a"
                cursor={"pointer"}
                color={"red.600"}
                bg={"white"}
                p={2}
                borderRadius={"50%"}
                zIndex={2}
              >
                <FaTrash />
              </Box>
              <Image
                w={"100%"}
                h={"100%"}
                alt="preview"
                objectFit={"cover"}
                src={image.src as string}
              />
            </Box>
          ))}
        </Flex>
      </Box>
    </section>
  );
}

export default ImageDropArea;
