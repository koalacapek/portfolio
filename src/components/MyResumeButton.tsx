const MyResumeButton = () => {
  const handleOpenResume = () => {
    const pdfPath = process.env.PUBLIC_URL + "/resume.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    <button
      className="hover:bg-gray-800 hover:text-white hover:border-gray-800 py-4 border-black border-2 px-6 transition duration-300 ease-in-out text-black text-xl rounded-lg w-[15%]"
      onClick={handleOpenResume}
    >
      My CV
    </button>
  );
};

export default MyResumeButton;
