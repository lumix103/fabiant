const ShellPrompt = () => (
  <div className="text-white">
    <div className="flex">
      <div className="bg-pink-300 rounded-l-xl px-4">fabs</div>
      <div className="text-pink-300 bg-blue-300"></div>
      <div className="bg-blue-300 px-4">my_website</div>
      <div className="text-blue-300 bg-pink-300"></div>
      <div className="bg-pink-300 px-4 rounded-r-xl">
        ♥ {new Date().getHours()}:
        {new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes()}
      </div>
    </div>
  </div>
);

export default ShellPrompt;
