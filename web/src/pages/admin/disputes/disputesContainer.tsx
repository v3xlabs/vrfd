import { AdminLayout } from '@components/admin/AdminLayout';
import Container from '@components/Container';
import { FC, ReactNode } from 'react';

export const DisputesContainer: FC<{ children: ReactNode }> = (properties) => {
    return (
        <AdminLayout activePage="disputes">
            <Container noPadding>
                <div className="w-full my-10 text-left">
                    {properties.children}
                </div>
            </Container>
        </AdminLayout>
    );
};
