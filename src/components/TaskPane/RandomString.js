import { range, reduce } from '@laufire/utils/collection';
import React, { useEffect, useState } from 'react';

const length = 4;

const letters = 'abcdefghijklmnopqrstuvwxyz';
const getRandomNo = (max, min) => Math.floor(Math.random() * (max - min) + min);
const getRandomCharacter = () => letters.charAt(getRandomNo(0, letters.length));
const getRandomString = () =>
	reduce(
		range(0, length), (acc) => acc + getRandomCharacter(), ''
	);

const RandomString = () => {
	const [characters, setRandomString] = useState('abcd');

	useEffect(() => {
		const intervalValue = 2000;
		const interval = setInterval(() => {
			setRandomString(() => getRandomString());
		}, intervalValue);

		return () => clearInterval(interval);
	});
	return <div>
		<p>Random String is {characters}</p>
	</div>;
};

export default RandomString;
