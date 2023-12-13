const MyResumeButton = () => {
  const handleOpenResume = () => {
    const pdfPath = process.env.PUBLIC_URL + "/resume.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <button
      className=" hover:bg-blue-700 hover:text-white hover:border-blue-700 font-bold py-4 border-blue-400 border-2 px-6 transition duration-300 ease-in-out text-blue-400 text-xl rounded-lg"
      onClick={handleOpenResume}
    >
      My Resume
    </button>
  );
};

export default MyResumeButton;
