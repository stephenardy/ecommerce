import Image from "next/image";

const BackgroundImage = () => {
  return (
    <div style={{ position: "relative", height: "100%" }}>
      <Image
        src="/shutter-speed-BQ9usyzHx_w-unsplash.jpg"
        alt="Landing Page Image"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default BackgroundImage;
