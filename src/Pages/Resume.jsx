function Resume() {
  return (
    <div className="text-center text-white bg-black py-10 sm:py-20 px-4">
      <h1 className="text-3xl sm:text-4xl font-bold">MY RESUME</h1>
      <p className="text-xl sm:text-2xl mt-2">
        I like to challenge my limits and never miss an opportunity.
      </p>
      <span className="block w-[8%] h-1 mx-auto bg-green-500 mt-2"></span>
      <a
        href="/Resume/Jasvir_Singh_Java_Dev.docx"
        className="bg-green-500 text-white py-2 px-6 sm:px-8 rounded mt-4 inline-block transition duration-200 hover:bg-green-600"
        download
      >
        DOWNLOAD RESUME
      </a>
    </div>
  );
}

export default Resume;
  