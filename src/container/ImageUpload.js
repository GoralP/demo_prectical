// // import React from "react";

// // const ImageUpload = () => {
// //   return <div>Image</div>;
// // };

// // export default ImageUpload;

// import React, { useState, useCallback, useRef, useEffect } from "react";
// import ReactCrop from "react-image-crop";
// import "react-image-crop/dist/ReactCrop.css";
// import user from "../image/user.png";
// import { Button, FormGroup } from "reactstrap";

// function generateDownload(canvas, crop) {
//   if (!crop || !canvas) {
//     return;
//   }

//   canvas.toBlob(
//     (blob) => {
//       const previewUrl = window.URL.createObjectURL(blob);

//       const anchor = document.createElement("a");
//       anchor.download = "cropPreview.png";
//       anchor.href = URL.createObjectURL(blob);
//       anchor.click();

//       window.URL.revokeObjectURL(previewUrl);
//     },
//     "image/png",
//     1
//   );
// }

// const ImageUpload = () => {
//   const [upImg, setUpImg] = useState();
//   const imgRef = useRef(null);
//   const previewCanvasRef = useRef(null);
//   const [crop, setCrop] = useState({ unit: "%", width: 30, aspect: 16 / 9 });
//   const [completedCrop, setCompletedCrop] = useState(null);
//   const [formData, updateFormData] = useState("");
//   const [preview, setPreview] = useState("");

//   // const fileHandler = (e) => {
//   //   updateFormData({
//   //     ...formData,
//   //     [e.target.name]: e.target.files[0],
//   //   });
//   //   setPreview({
//   //     ...preview,
//   //     [e.target.name]: URL.createObjectURL(e.target.files[0]),
//   //   });
//   // };

//   const onSelectFile = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const reader = new FileReader();
//       reader.addEventListener("load", () => setUpImg(reader.result));
//       reader.readAsDataURL(e.target.files[0]);
//       updateFormData({
//         ...formData,
//         [e.target.name]: e.target.files[0],
//       });
//       // setPreview({
//       //   ...preview,
//       //   [e.target.name]: URL.createObjectURL(e.target.files[0]),
//       // });
//     }
//   };

//   const onLoad = useCallback((img) => {
//     imgRef.current = img;
//   }, []);

//   useEffect(() => {
//     if (!completedCrop || !previewCanvasRef.current || !imgRef.current) {
//       return;
//     }

//     const image = imgRef.current;
//     const canvas = previewCanvasRef.current;
//     const crop = completedCrop;

//     const scaleX = image.naturalWidth / image.width;
//     const scaleY = image.naturalHeight / image.height;
//     const ctx = canvas.getContext("2d");
//     const pixelRatio = window.devicePixelRatio;

//     canvas.width = crop.width * pixelRatio;
//     canvas.height = crop.height * pixelRatio;

//     ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
//     ctx.imageSmoothingQuality = "high";

//     ctx.drawImage(
//       image,
//       crop.x * scaleX,
//       crop.y * scaleY,
//       crop.width * scaleX,
//       crop.height * scaleY,
//       0,
//       0,
//       crop.width,
//       crop.height
//     );
//   }, [completedCrop]);

//   return (
//     <div className="App">
//       <div className="row">
//         {/* <input type="file" accept="image/*" onChange={onSelectFile} /> */}
//         <div className="col-sm-6">
//           <FormGroup>
//             <div className="profile-image">
//               <div className="house-wrapper">
//                 <label>
//                   <img
//                     src={user}
//                     alt="front house"
//                     className="edit-profile-image"
//                   />

//                   <div className="picture-preview">
//                     {/* <img
//                       src={preview.user}
//                       alt="front house"
//                       className={
//                         preview.user
//                           ? "set-show-preview edit-profile-image"
//                           : "show-preview edit-profile-image"
//                       }
//                     ></img> */}
//                     <ReactCrop
//                       src={upImg}
//                       onImageLoaded={onLoad}
//                       crop={crop}
//                       onChange={(c) => setCrop(c)}
//                       onComplete={(c) => setCompletedCrop(c)}
//                       className="edit-profile-image"
//                     />
//                   </div>
//                 </label>

//                 <input
//                   name="user"
//                   type="file"
//                   accept="image/*"
//                   className="image-file"
//                   onChange={onSelectFile}
//                 />
//               </div>
//             </div>
//           </FormGroup>
//         </div>
//       </div>
//       <div className="col-sm-6">
//         {/* <ReactCrop
//           src={upImg}
//           onImageLoaded={onLoad}
//           crop={crop}
//           onChange={(c) => setCrop(c)}
//           onComplete={(c) => setCompletedCrop(c)}
//         /> */}
//       </div>
//       <div>
//         <canvas
//           ref={previewCanvasRef}
//           // Rounding is important so the canvas width and height matches/is a multiple for sharpness.
//           style={{
//             width: Math.round(completedCrop?.width ?? 0),
//             height: Math.round(completedCrop?.height ?? 0),
//           }}
//         />
//       </div>

//       <button
//         type="button"
//         disabled={!completedCrop?.width || !completedCrop?.height}
//         onClick={() =>
//           generateDownload(previewCanvasRef.current, completedCrop)
//         }
//       >
//         Save
//       </button>
//     </div>
//   );
// };

// export default ImageUpload;

import React, { useState } from "react";

import ImgCrop from "antd-img-crop";
import { Upload } from "antd";

const ImageUpload = () => {
  const [fileList, setFileList] = useState([]);

  const onChange = ({ fileList: newFileList }) => {
    console.log(newFileList);
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);

    if (imgWindow) {
      imgWindow.document.write(image.outerHTML);
    } else {
      window.location.href = src;
    }
  };

  return (
    <ImgCrop grid>
      <Upload
        // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"

        listType="picture-card"
        quality={1}
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {fileList.length < 1 && "+ Upload"}
      </Upload>
    </ImgCrop>
  );
};

export default ImageUpload;
