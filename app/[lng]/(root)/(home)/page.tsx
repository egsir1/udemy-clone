'use client';

import { useTranslation } from '@/i18n/client';
import { useParams } from 'next/navigation';
import Hero from './_components/hero';

function Page() {
	const { lng } = useParams();
	const { t } = useTranslation(lng as string);

	return (
		<div>
			<Hero />
		</div>
	);
}

export default Page;
