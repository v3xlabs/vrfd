import { FC } from 'react';

export const CTASection: FC = () => {
    return (
        <div className="w-full h-[80vh] bg-ens-gradient-primary relative">
            {/* <img
                className="h-96 absolute bottom-0 left-0 w-full"
                src={wave}
                alt="waves"
            ></img> */}

            <svg
                className="h-20 xl:h-60 absolute bottom-0 left-0 w-full"
                width="100%"
                viewBox="0 0 1920 346"
                fill="none"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0 116L46 87C91 58 183 0 274 29C366 58 457 173 549 202C640 231 731 173 823 164C914 154 1006 192 1097 173C1189 154 1280 77 1371 96C1463 116 1554 231 1646 231C1737 231 1829 116 1874 58L1920 0V346H1874C1829 346 1737 346 1646 346C1554 346 1463 346 1371 346C1280 346 1189 346 1097 346C1006 346 914 346 823 346C731 346 640 346 549 346C457 346 366 346 274 346C183 346 91 346 46 346H0V116Z"
                    className="fill-grey1"
                />
            </svg>

            <div className="flex justify-center items-center h-full flex-col gap-3">
                <h1 className="text-white font-bold text-6xl">vrfd.eth</h1>
                <span className="text-white">Decentralized Blue Checkmark</span>

                <div className="mt-4 flex rounded-xl bg-white w-full max-w-md">
                    <input
                        name="Ens Name"
                        placeholder="v3x.eth"
                        className="h-full w-full px-5 py-4 bg-transparent"
                    />
                    <button className="bg-black text-white px-7 rounded-xl">
                        Verify
                    </button>
                </div>

                <div className="mt-4 flex flex-col text-center text-white gap-1">
                    <span>type a name</span>
                    <span>check the status</span>
                </div>
            </div>
        </div>
    );
};
