const MyResumeButton = () => {
  const handleOpenResume = () => {
    const pdfPath = process.env.PUBLIC_URL + "/resume.pdf";
    window.open(pdfPath, "_blank");
  };

  return (
    // <button
    //   className="bg-transparent border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-4 transition duration-300 ease-in-out"
    //   onClick={handleOpenResume}
    // >
    //   My Resume
    // </button>
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full transition duration-300 ease-in-out"
      onClick={handleOpenResume}
    >
      My Resume
    </button>
  );
};

export default MyResumeButton;
