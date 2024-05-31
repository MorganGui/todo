export default async (url, requestType, data = null) => {
	// Definition of the request header
	const requestHeader = {
		method: requestType,
		headers: {
			'Content-type': 'application/json'
		}
	}

	// Add data in POST and PUT requests
	if (['POST', 'PUT'].includes(requestType)) {
		requestHeader.body = JSON.stringify(data)
	}

	// Run the fetch request
	const response = await fetch(url, requestHeader)

	// Checking the request
	if (response.ok) {
		// Checking the status of the request
		switch(response.status){
			case 200:
				return Promise.resolve(await response.json())
			case 201:
				return Promise.resolve(await response.json())
			default:
				return Promise.reject(response)
		}
	} else {
		// Recovery of the error code
		return Promise.reject(response)
	}
}
