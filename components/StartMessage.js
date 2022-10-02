import Head from "next/head";

const StartMessage = () => (
  <div>
    <Head>
      <title>fab's terminal</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div>fab's terminal 0.2.0</div>
    <div>Copyright (c) Fabian Torres.</div>
    <div className="text-black">█</div>
    <div>
      <a href="www.fabiant.me" className="text-green-200 hover:text-yellow-200">
        [fabiant.me]
      </a>
    </div>
    <div></div>
    <div>Type 'help' to get help.</div>
    <div className="text-black">█</div>
  </div>
);

export default StartMessage;
