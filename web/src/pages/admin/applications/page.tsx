import { AdminLayout } from '@components/admin/AdminLayout';
import Container from '@components/Container';

export const ApplicationPage = () => {
    return (
        <AdminLayout activePage="applications">
            <Container noPadding>
                <div className="w-full bg-red mt-10 text-left">yo</div>
            </Container>
        </AdminLayout>
    );
};
