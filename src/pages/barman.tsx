import Head from "next/head";
import BarManWrapper from "./components/form/barman/barManWrapper";

const BarMan = () => {
    return (<>
    <Head>
        <title>Ice cream | bar man</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" w-full h-screen">
        <div className="w-full max-w-md h-full  min-h-screen mx-auto md:border-2 border-zinc-200 px-4 pt-2 ">
            

       <BarManWrapper/>
        </div>
      </main>
    </>  );
}
 
export default BarMan;