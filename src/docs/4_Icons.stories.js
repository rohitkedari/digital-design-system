import React from 'react';
import { storiesOf } from '@storybook/react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as SolidIcons from '@fortawesome/free-solid-svg-icons';
import * as RegularIcons from '@fortawesome/free-regular-svg-icons';
import * as BrandsIcons from '@fortawesome/free-brands-svg-icons';

storiesOf('Guides|Icons', module)
	.add('Solid Icons', () => {
		const solidIconList = Object.keys(SolidIcons)
			.filter((key) => key !== 'fas' && key !== 'prefix')
			.map((icon) => SolidIcons[icon]);

		library.add(...solidIconList);
		return (
			<div
				style={{
					display: 'grid',
					boxSizing: 'border-box',
					gridTemplateColumns:
						'repeat(auto-fill, minmax(150px, 1fr))',
					justifyContent: 'space-around',
				}}
			>
				{solidIconList.map((icon) => (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							height: '70px',
						}}
						key={`key_${icon.iconName}`}
					>
						<FontAwesomeIcon icon={[icon.prefix, icon.iconName]} />
						<span>{icon.iconName}</span>
					</div>
				))}
			</div>
		);
	})
	.add('Regular Icons', () => {
		const regularIconList = Object.keys(RegularIcons)
			.filter((key) => key !== 'far' && key !== 'prefix')
			.map((icon) => RegularIcons[icon]);

		library.add(...regularIconList);
		return (
			<div
				style={{
					display: 'grid',
					boxSizing: 'border-box',
					gridTemplateColumns:
						'repeat(auto-fill, minmax(150px, 1fr))',
					justifyContent: 'space-around',
				}}
			>
				{regularIconList.map((icon) => (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							height: '70px',
						}}
						key={`key_${icon.iconName}`}
					>
						<FontAwesomeIcon icon={[icon.prefix, icon.iconName]} />
						<span>{icon.iconName}</span>
					</div>
				))}
			</div>
		);
	})
	.add('Brands Icons', () => {
		const BrandsIconList = Object.keys(BrandsIcons)
			.filter((key) => key !== 'fab' && key !== 'prefix')
			.map((icon) => BrandsIcons[icon]);

		library.add(...BrandsIconList);
		return (
			<div
				style={{
					display: 'grid',
					boxSizing: 'border-box',
					gridTemplateColumns:
						'repeat(auto-fill, minmax(150px, 1fr))',
					justifyContent: 'space-around',
				}}
			>
				{BrandsIconList.map((icon) => (
					<div
						style={{
							display: 'flex',
							alignItems: 'center',
							flexDirection: 'column',
							height: '70px',
						}}
						key={`key_${icon.iconName}`}
					>
						<FontAwesomeIcon icon={[icon.prefix, icon.iconName]} />
						<span style={{ wordBreak: 'break-all' }}>
							{icon.iconName}
						</span>
					</div>
				))}
			</div>
		);
	});
