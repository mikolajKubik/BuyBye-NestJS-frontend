import { DataTable } from '@/components/data-table';
import { Product, columns } from './columns'; // Adjust the import path as needed
import Container from '@/components/ui/container';

// Fetch products from the specified API
async function getProducts(): Promise<Product[]> {
    const res = await fetch('http://localhost:3000/products');
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await res.json();
    return data;
}

// Page component to display the table
export default async function Page() {
    const data = await getProducts();
    console.log("creating page component...");
    return (
        <Container className='mt-4'>
            <section className="">

                <div className="container mx-auto">
                <h1 className="mb-6 text-3xl font-bold ">All Products</h1>

                    <DataTable columns={columns} data={data} />
                </div>
            </section>
        </Container>

    );
}