import axios from "axios";

const ImageUploadService = (
  ()=>{
    const imageUploadEndpoint = `https://localhost:7023/UploadImage`;

    const uploadImage = async (img: File) => {
      alert();
      const formData = new FormData();
      formData.append("file", img);

      const res = await axios({
        url: imageUploadEndpoint,
        method: "POST",
        data: formData,
        headers: {"Content-Type": "multipart/form-data"}
      });

      formData.delete("file");
    }

    return{uploadImage}
  }
)();

export default ImageUploadService;