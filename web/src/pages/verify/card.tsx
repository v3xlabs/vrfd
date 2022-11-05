import { Card as ThorinCard, Input } from '@ensdomains/thorin';
import { DOMAttributes, FC, ReactNode } from 'react';
import { ChevronLeft } from 'react-feather';

export const Card: FC<{
    children: ReactNode;
    title: string;
    bottom?: ReactNode;
    backPressed?: DOMAttributes<HTMLButtonElement>['onClick'];
}> = (properties) => {
    return (
        <ThorinCard className="w-full">
            <div className="md:px-6 py-2 md:py-7 flex flex-col w-full items-start">
                {properties.backPressed !== undefined && (
                    <div className="flex items-center gap-4 mb-5">
                        <button
                            onClick={properties.backPressed}
                            className="hover:bg-gray-100 rounded p-1"
                        >
                            <ChevronLeft height="30px" width="30px" />
                        </button>
                        Go back
                    </div>
                )}
                <h4 className="text-2xl font-semibold">{properties.title}</h4>

                <div className="flex flex-col w-full mt-5 mb-5">
                    {properties.children}
                </div>
            </div>

            {properties.bottom}
        </ThorinCard>
    );
};

export type InfoDataType = {
    verified: boolean;
    verifiedAt: string;
};

export const InfoCardContent: FC<{ data: InfoDataType }> = (properties) => {
    return (
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                    <table className="min-w-full">
                        <thead className="border-b text-left">
                            <tr className="bg-gray-50">
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
                            {Object.entries(properties.data).map(
                                (item, index) => {
                                    return (
                                        <tr
                                            key={`info_row_${index}`}
                                            className="bg-white border-b"
                                        >
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                {item[0]}
                                            </td>
                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                {item[1].toString()}
                                            </td>
                                        </tr>
                                    );
                                }
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export const ApplyCardContent: FC<{ address: string; name: string }> = (
    properties
) => {
    return (
        <div className="flex flex-col text-left gap-6">
            <div className="flex flex-col gap-2">
                <p className="text-base">
                    I acknowledge applying for verification on this adress:
                </p>
                <p className="text-sm text-grey2">
                    {properties.address} ({properties.name})
                </p>
            </div>

            <Input label="Twitter" />
            <Input label="Telegram" />
            <Input label="Legal Name" />
        </div>
    );
};
