import { AdminLayout } from '@components/admin/AdminLayout';
import { FC } from 'react';
import { useParams } from 'react-router';

export const AdminNameDetailsPage: FC = () => {
    const { name } = useParams<{
        name: string;
    }>();

    return <AdminLayout activePage="applications">{name}</AdminLayout>;
};
