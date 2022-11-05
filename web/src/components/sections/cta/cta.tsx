import ensIcon from '@assets/ensIcon.svg';
import v3xLabsIcon from '@assets/v3xLabsIcon.png';
import Container from '@components/Container';
import { CtaWaved } from '@components/CtaWaved';
import { FC } from 'react';

export const CTASection: FC<{ initialInputValue?: string }> = (properties) => {
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
                                defaultValue={properties.initialInputValue}
                                id="name"
                                name="name"
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

                    <div
                        className="flex items-center gap-2 mt-2
                    text-center text-white"
                    >
                        <img src={ensIcon} alt="Ens Icon" className="w-10" />
                        <span className="text-base font-semibold">X</span>
                        <img
                            src={v3xLabsIcon}
                            alt="V3X Labs Icon"
                            className="w-10"
                        />
                    </div>
                </div>
            </Container>
        </CtaWaved>
    );
};
