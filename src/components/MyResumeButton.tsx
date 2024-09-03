const MyResumeButton = () => {
  const handleOpenResume = () => {
    const pdfPath = process.env.PUBLIC_URL + "/resume.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <button
      className="hover:bg-gray-800 hover:text-white hover:border-gray-800 py-4 border-white border-2 px-8 transition duration-300 ease-in-out text-xl rounded-xl"
      onClick={handleOpenResume}
    >
      My CV
    </button>
  );
};

export default MyResumeButton;
