import ensIcon from '@assets/ensIcon.svg';
import v3xLabsIcon from '@assets/v3xLabsIcon.png';
import Container from '@components/Container';
import { CtaWaved } from '@components/CtaWaved';
import { Input } from '@ensdomains/thorin';
import { FC } from 'react';
import { ArrowRight } from 'react-feather';

export const CTASection: FC<{ initialInputValue?: string }> = ({
    initialInputValue,
}) => {
    return (
        <CtaWaved>
            <Container>
                <div className="flex justify-center items-center h-full flex-col gap-3">
                    <h1 className="text-white font-bold text-6xl">vrfd.eth</h1>
                    <p className="text-white">Decentralized Blue Checkmark</p>

                    <form method="GET" action="/verify">
                        <div className="flex rounded-xl w-full max-w-sm items-stretch relative">
                            <div className="pb-2 w-screen">
                                <Input
                                    label=""
                                    id="name"
                                    name="name"
                                    placeholder="v3x.eth"
                                    defaultValue={initialInputValue}
                                    style={{ width: '100%' }}
                                />
                            </div>
                            <button
                                type="submit"
                                className="flex text-grey2 absolute right-4 top-1/2 -translate-y-1/2"
                            >
                                <ArrowRight />
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
