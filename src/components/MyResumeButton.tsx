const MyResumeButton = () => {
  // const handleOpenResume = () => {
  //   const pdfPath = process.env.PUBLIC_URL + "/resume.pdf";
  //   window.open(pdfPath, "_blank");
  // };

  return (
    <a
      className="hover:bg-white hover:text-black hover:border-black py-4 border-white border px-8 transition duration-300 ease-in-out text-xl rounded-xl"
      href={`${process.env.PUBLIC_URL}/resume.pdf`}
      target="_blank"
      rel="noreferrer"
    >
      My CV
    </a>
  );
};

export default MyResumeButton;
