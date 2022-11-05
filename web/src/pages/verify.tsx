import tempImage from '@assets/temp-image.gif';
import Container from '@components/Container';
import { CTASection } from '@components/sections/cta/cta';
import { Footer } from '@components/sections/footer/footer';
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

const addEnsIfNot = (input: string | null) =>
    input != undefined
        ? input.includes('.')
            ? input
            : `${input}.eth`
        : undefined;

export const VerifyPage: FC = () => {
    const [searchParameters, _setSearchParaters] = useSearchParams();

    const name = addEnsIfNot(searchParameters.get('name'));

    return (
        <div
            className="flex flex-col
            w-full min-h-screen
            bg-grey1"
        >
            {searchParameters.get('name') ? (
                <>
                    <CTASection initialInputValue={name} />

                    <Container>
                        <div className="flex justify-center items-center flex-col gap-5">
                            <div className="flex flex-col md:flex-row gap-7 md:gap-14 items-center">
                                <img
                                    className="w-28 rounded-3xl"
                                    src={tempImage}
                                    alt="Profile"
                                />
                                <h2 className="text-4xl">{name}</h2>
                            </div>
                            <span className="text-md break-all text-grey2">
                                0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045
                            </span>
                        </div>

                        {/* Border not working, box shadow not working????, todo: add box */}
                        <div className="p-5 border-3 border-red-100 w-full">
                            as
                        </div>
                    </Container>
                </>
            ) : (
                <>
                    <CTASection />

                    <Container>
                        <div className="text-4xl text-gray pb-32">
                            You need to enter a name to verify
                        </div>
                    </Container>
                </>
            )}
            <Footer />
        </div>
    );
};
