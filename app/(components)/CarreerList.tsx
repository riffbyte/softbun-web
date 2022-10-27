import { CareerApi } from '@/lib/contentful';

async function getCareerItems() {
    const careerApi = new CareerApi();
    const { items: careerItems } = await careerApi.getCareerItems();

    return careerItems;
}

export async function CarreerList() {
    const items = await getCareerItems();

    return (
        <ul className="text-lg md:text-xl">
            {items.map((item) => (
                <li key={item.sys.id} className="my-4">
                    <span className="text-purple dark:text-aquamarine">{item.position}</span> @{' '}
                    {item.company}.{' '}
                    <span className="block md:inline">
                        {new Date(item.startedAt).getFullYear()} -{' '}
                        {item.finishedAt ? new Date(item.finishedAt).getFullYear() : 'Present'}
                    </span>
                </li>
            ))}
        </ul>
    );
}
