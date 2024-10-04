type HTTPMethod = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';

/**
 *
 * @param url url of the endpoint
 * @param method accept 'GET' 'PUT' 'POST' 'DELETE' 'PATCH'
 * @param payload if is't not get and patch, then can have a payload as any data structure
 * @returns the response value
 * @throws a error with error message as status code
 */
export const API = async (
	url: string,
	method: HTTPMethod,
	payload?: object
) => {
	const res = await fetch(url, {
		method: method,
		body:
			payload && method !== 'GET' && method !== 'DELETE'
				? JSON.stringify(payload)
				: undefined,
		headers: new Headers({
			'Content-Type': 'application/json',
		}),
	});

	if (!res.ok) {
		throw new Error(`${res.status}`);
	}

	const json = await res.json();
	return json;
};
