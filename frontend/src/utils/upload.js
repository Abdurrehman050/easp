import axios from "axios";

const upload = async (file) => {
  const data = new FormData();
  data.append("file", file);
  data.append("upload_preset", "easp_upload");

  try {
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/diy07a1hm/image/upload",
      data
    );

    const { url } = res.data;
    return url;
  } catch (err) {
    console.log(err);
  }
};

export default upload;
