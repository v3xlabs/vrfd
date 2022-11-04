import Container from '@components/Container';
import { CtaWaved } from '@components/CtaWaved';
import { FC } from 'react';

export const CTASection: FC = () => {
    return (
        <CtaWaved>
            <Container>
                <div className="flex justify-center items-center h-full flex-col gap-3">
                    <h1 className="text-white font-bold text-6xl">vrfd.eth</h1>
                    <span className="text-white">
                        Decentralized Blue Checkmark
                    </span>

                    <form method="GET" action="/verify">
                        <div className="mt-4 flex rounded-xl bg-white w-full max-w-md">
                            <input
                                id="name"
                                name="Ens Name"
                                placeholder="v3x.eth"
                                className="h-full w-full px-5 py-4 bg-transparent"
                            />
                            <button
                                type="submit"
                                className="bg-black text-white px-7 rounded-xl"
                            >
                                Verify
                            </button>
                        </div>
                    </form>

                    <div className="mt-4 flex flex-col text-center text-white gap-1">
                        <span>type a name</span>
                        <span>check the status</span>
                    </div>
                </div>
            </Container>
        </CtaWaved>
    );
};
