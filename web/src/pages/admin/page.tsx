import { AdminLayout } from '@components/admin/AdminLayout';
import { Card } from '@ensdomains/thorin';
import { FC } from 'react';

export const AdminPage: FC = () => {
    return (
        <AdminLayout activePage="home">
            <div className="flex flex-col gap-10">
                <h1 className="text-4xl">Welcome v3x.eth</h1>

                <div className="grid gap-5 grid-cols-1 lg:grid-cols-2 w-full">
                    <Card className="!bg-green !rounded-xl text-white h-64">
                        <div className="flex gap-5 justify-center flex-col items-center h-full">
                            <span className="text-6xl">128</span>
                            <span className="text-1xl">Verified Names</span>
                        </div>
                    </Card>

                    <Card className="!bg-red !rounded-xl text-white h-64">
                        <div className="flex gap-5 justify-center flex-col items-center h-full">
                            <span className="text-6xl">0</span>
                            <span className="text-1xl">Declined Names</span>
                        </div>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
};
