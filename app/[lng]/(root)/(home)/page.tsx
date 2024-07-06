'use client';

import Hero from './_components/hero';
import FeaturedCourses from './_components/featured-courses';
import Categories from './_components/categories';
import Instructor from './_components/instructor';
import LearningJourney from './_components/learning-journey';

function Page() {
	return (
		<div>
			<Hero />
			<FeaturedCourses />
			<Categories />
			<Instructor />
			<LearningJourney />
		</div>
	);
}

export default Page;
