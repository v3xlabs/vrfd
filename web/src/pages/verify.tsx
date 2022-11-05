import tempImage from '@assets/temp-image.gif';
import Container from '@components/Container';
import { Layout } from '@components/Layout';
import { CTASection } from '@components/sections/cta/cta';
import { Button } from '@ensdomains/thorin';
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
        <Layout>
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
                        <div className="border-2 w-full flex flex-col rounded-lg">
                            <div className="px-10 py-7 flex flex-col w-full items-start">
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

                            <Button className="!rounded-lg">
                                Verify this name
                            </Button>
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
        </Layout>
    );
};
