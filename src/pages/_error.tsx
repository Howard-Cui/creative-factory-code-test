import React from 'react';

const Error = ({ statusCode }: { statusCode: number }) => {
	if (statusCode === 404) {
		return <div>Oops... This page do not exist</div>;
	}

	return <div>Oops... Some thing wrong, please contact author to fix it</div>;
};

Error.getInitialProps = ({
	res,
	err,
}: {
	res: { statusCode: number };
	err: { statusCode: number };
}) => {
	const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
	return { statusCode };
};

export default Error;
