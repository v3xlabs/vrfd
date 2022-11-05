import tempImage from '@assets/temp-image.gif';
import Container from '@components/Container';
import { Layout } from '@components/Layout';
import { CTASection } from '@components/sections/cta/cta';
import { Button } from '@ensdomains/thorin';
import { FetchEnsAddressResult } from '@wagmi/core';
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEnsAddress, useEnsAvatar } from 'wagmi';

const addEnsIfNot = (input: string | null) =>
    input != undefined
        ? input.includes('.')
            ? input
            : `${input}.eth`
        : undefined;

const Profile: FC<{ name: string; address: FetchEnsAddressResult }> = ({
    name,
    address,
}) => {
    const {
        data: avatar,
        isError: avatarError,
        isLoading: avatarLoading,
    } = useEnsAvatar({
        addressOrName: name,
    });

    return (
        <>
            <div className="flex justify-center items-center flex-col gap-5">
                <div className="flex flex-col md:flex-row gap-7 md:gap-14 items-center">
                    <img
                        className="w-28 rounded-3xl"
                        src={avatar ?? tempImage}
                        alt="Profile"
                    />
                    <h2 className="text-4xl">{name}</h2>
                </div>
                <span className="text-md break-all text-grey2">{address}</span>
            </div>

            {/* Border not working, box shadow not working????, todo: add box */}
            <div className="border-2 w-full flex flex-col rounded-lg">
                <div className="px-6 md:px-10 py-7 flex flex-col w-full items-start">
                    <h4 className="text-2xl font-semibold">Info</h4>

                    <div className="flex flex-col w-full">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="border-b text-left">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4"
                                                >
                                                    Name
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="text-sm font-medium text-gray-900 px-6 py-4"
                                                >
                                                    Value
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-left">
                                            <tr className="bg-white border-b">
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    Verified
                                                </td>
                                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                    false
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Button className="!rounded-lg">Verify this name</Button>
            </div>
        </>
    );
};

const NameSection: FC<{ name: string }> = ({ name }) => {
    const { data, isLoading, isError } = useEnsAddress({
        name,
    });

    console.log({ data, isLoading, isError });

    return (
        <>
            {isLoading && !isError && !data && <div>Loading...</div>}
            {isError && !isLoading && !data && <div>Error</div>}
            {data && !isLoading && !isError && (
                <Profile name={name} address={data} />
            )}
            {!data && !isLoading && !isError && <div>Not found</div>}
        </>
    );
};

export const VerifyPage: FC = () => {
    const [searchParameters, _setSearchParaters] = useSearchParams();

    const rawName = searchParameters.get('name');
    const name = addEnsIfNot(rawName);

    return (
        <Layout>
            <CTASection initialInputValue={name} />

            <Container>
                {name && <NameSection name={name} />}
                {!name && (
                    <div className="text-4xl text-gray pb-32">
                        You need to enter a name to verify
                    </div>
                )}
            </Container>
        </Layout>
    );

    // return (
    //     <Layout>
    //         {searchParameters.get('name') ? (
    //             <>
    //                 <CTASection initialInputValue={name} />

    //                 <Container></Container>
    //             </>
    //         ) : (
    //             <>
    //                 <CTASection />

    //                 <Container>
    //                     <div className="text-4xl text-gray pb-32">
    //                         You need to enter a name to verify
    //                     </div>
    //                 </Container>
    //             </>
    //         )}
    //     </Layout>
    // );
};
