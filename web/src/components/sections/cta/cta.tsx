import ensIcon from '@assets/ensIcon.svg';
import v3xLabsIcon from '@assets/v3xLabsIcon.png';
import Container from '@components/Container';
import { CtaWaved } from '@components/CtaWaved';
import { Input } from '@ensdomains/thorin';
import { FC, useRef } from 'react';
import { ArrowRight } from 'react-feather';

export const CTASection: FC<{ initialInputValue?: string }> = ({
    initialInputValue,
}) => {
    const inputReference = useRef<HTMLInputElement>(null);

    return (
        <CtaWaved>
            <Container>
                <div className="flex flex-col gap-3 justify-center items-center h-full w-full">
                    <h1 className="text-white font-bold text-6xl">vrfd.eth</h1>
                    <p className="text-white">Decentralized Blue Checkmark</p>

                    <form
                        method="GET"
                        action="/verify/"
                        onSubmit={(event) => {
                            if (inputReference.current?.value.length === 0) {
                                event.preventDefault();
                            }
                        }}
                        className="w-full flex justify-center"
                    >
                        <div className="flex items-stretch rounded-xl w-full max-w-lg relative">
                            <div className="pb-2 w-full">
                                <Input
                                    label=""
                                    id="name"
                                    name="name"
                                    ref={inputReference}
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
                        <a
                            href="https://ens.domains"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={ensIcon}
                                alt="Ens Icon"
                                className="w-10"
                            />
                        </a>
                        <a href="https://og.ax">
                            <span className="text-base font-semibold">X</span>
                        </a>
                        <a
                            href="https://github.com/v3xlabs"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={v3xLabsIcon}
                                alt="V3X Labs Icon"
                                className="w-10"
                            />
                        </a>
                    </div>
                </div>
            </Container>
        </CtaWaved>
    );
};
