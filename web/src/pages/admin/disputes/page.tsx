import { Button, Card, Input, Select } from '@ensdomains/thorin';
import {
    CheckCircle,
    ChevronDown,
    ChevronUp,
    Clock,
    XCircle,
} from 'react-feather';
import { useNavigate } from 'react-router';

import { DisputesContainer } from './disputesContainer';

const psuedoData = {
    'helgesson.eth': {
        createdAt: '2022/01/20',
        status: 'Awaiting Review',
    },
};

export const DisputesPage = () => {
    const nav = useNavigate();

    return (
        <DisputesContainer>
            <Card className="flex flex-col gap-5">
                <div className="flex gap-2 flex-col lg:flex-row items-end">
                    <Input label="Name" placeholder="v3x.eth" />
                    <Button className="lg:h-14 m-1 w-full lg:!w-48">
                        Search
                    </Button>
                </div>

                <div className="flex gap-5 flex-col lg:flex-row items-end">
                    <Select
                        contentEditable={false}
                        label="Type"
                        value="awaiting"
                        options={[
                            {
                                value: 'awaiting',
                                label: 'Awaiting Approval',
                                prefix: <Clock />,
                            },
                            {
                                value: 'approved',
                                label: 'Approved',
                                prefix: <CheckCircle />,
                            },
                            {
                                value: 'declined',
                                label: 'Declined',
                                prefix: <XCircle />,
                            },
                        ]}
                    />
                    <Select
                        contentEditable={false}
                        label="Sort By Date"
                        value="ascending"
                        options={[
                            {
                                value: 'decending',
                                label: 'Decending',
                                prefix: <ChevronDown />,
                            },
                            {
                                value: 'ascending',
                                label: 'Ascending',
                                prefix: <ChevronUp />,
                            },
                        ]}
                    />
                </div>

                <div className="mt-10">
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
                                                Created At
                                            </th>
                                            <th
                                                scope="col"
                                                className="text-sm font-medium text-gray-900 px-6 py-4"
                                            >
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-left">
                                        {Object.entries(psuedoData).map(
                                            (item, index) => {
                                                return (
                                                    <tr
                                                        key={`admin_info_row_${index}`}
                                                        className="bg-white cursor-pointer hover:bg-gray-100 border-b"
                                                        onClick={() => {
                                                            nav(
                                                                `/admin/disputes/${encodeURI(
                                                                    item[0]
                                                                )}`
                                                            );
                                                        }}
                                                    >
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            {item[0]}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {item[1].createdAt}
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {item[1].status}
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
                </div>
            </Card>
        </DisputesContainer>
    );
};
