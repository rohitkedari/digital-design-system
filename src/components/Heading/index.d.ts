import React from 'react';

export interface HeadingProps {
	color?: string;
	level?: '1' | '2' | '3' | '4' | '5' | '6' | 1 | 2 | 3 | 4 | 5 | 6;
	size?: 'small' | 'medium' | 'large' | 'xlarge' | string;
	textAlign?: TextAlignType;
}
declare const Heading: React.SFC<HeadingProps>;

export { Heading };
